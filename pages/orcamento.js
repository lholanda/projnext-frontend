import React, { useState } from 'react';

// componente do NEXT para trabalhar e facilitar com SEO
import Head from 'next/head';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

// importar componente do reactstrap
import { Alert, Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Orcamento() {

  const meuNome = 'Luiz Holanda'
  // orcamento são as posicoes para receber - para setar os valores usa setOrcamento
  const [orcamento, setOrcamento] = useState({
    name: 'Luiz Roberto Holanda',
    email: 'holanda@lhdev.com.br',
    phone: '41 98475-4757',
    whatsApp: '',
    projeto: 'Projeto '
  })

  // criar um objeto com 3 posicoes
  const [resposta, setResposta] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  // receber o valor, mas antes disso na posicao input de name, colocar onChange 

  const onChangeEntrada = event => setOrcamento({
    ...orcamento, [event.target.name]: event.target.value
  })

  //console.log(orcamento)
  //console.log('-----------')  

  const sendFormulario = async event => {
    event.preventDefault();
    console.log(orcamento) // aqui vai pro console do navegador F12 -- pode ser alert(orcamento.name)
    
    // enviar para a API com await
    setResposta({ formSave: true })
    try {
      // tenta enviar, se a API estier no ar , e funcionar tudo bem, retorna type: success
      const res = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        header: { 'Content-Type': 'application/json' }
      })
      // verifica a resposta 
      
      //alert(orcamento.name)

      const responseEnv = await res.json();

      console.log(responseEnv);

      // depois que a API responder, seta a resposta == false 
      if (responseEnv.error) {
        setResposta({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        })
      } else {
        setResposta({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        })
      }
    } catch (error) {
      setResposta({
        formSave: false,
        type: 'error',
        message: "Erro ao enviar o Orçamento"
      })
    }
  }

  return (
    <div>
      <Head>
        <title>Orçamento - Holanda</title>
      </Head>

      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                    background-color: #050c3d;
                    color: #00a1fc;
                    padding-top: 40px;
                    padding-bootom: 40px;
                    margin-bottom: 0rem !important;
                }`}
        </style>
        <Container>
          <h1 className="display-4">Orçamento</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          {resposta.type === 'error' ? <Alert color="danger">  {resposta.message} </Alert> : ""}
          {resposta.type === 'success' ? <Alert color="success"> {resposta.message} </Alert> : ""}

          {/* Formulário */}

          <Form onSubmit = { sendFormulario } >
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" value={orcamento.name} placeholder="Prencha com o nome completo" onChange={onChangeEntrada} />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" value={orcamento.email} placeholder="Prencha com o seu melhor e-mail" onChange={onChangeEntrada} />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" value={orcamento.phone} placeholder="(XX) XXXX-XXXX" onChange={onChangeEntrada} />
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="whatsApp" id="whatsApp" value={orcamento.whatsApp} placeholder="(XX) XXXX-XXXX" onChange={onChangeEntrada} />
            </FormGroup>

            <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input type="textarea" name="projeto" id="projeto" value={orcamento.projeto} placeholder="Fale um pouco do seu projeto" onChange={onChangeEntrada} />
            </FormGroup>
            {/* resposta.formSave ? "Enviando" : "vazio" */}

            { resposta.formSave ? <Button type="submit" outline color="danger" disable >Enviando...</Button> 
                  : <Button type="submit" outline color="primary">Solicitar</Button> }

          </Form>
        </Container>
      </Jumbotron>

      <Rodape />

    </div>
  )
}

export default Orcamento;