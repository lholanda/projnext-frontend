import React from 'react';

// https://icons8.com.br/icons/set/favicon

// componente do NEXT para trabalhar e facilitar com SEO
import Head from 'next/head';
import Menu   from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas); // aqui

function Home({ data }) {
    return (
        // Coloca o <HEAD> antes do menu
        <div>

            <Head>
                <title>Home - Holanda</title>
            </Head>

            <Menu />
             
            {console.log(data.home['_id']) }

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                    background-color: #050c3d;
                    color: #00a1fc;
                    margin-bottom: 0rem !important;
                }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4"> { data.home['topTitulo'] } </h1>
                    <p className="lead">{ data.home['topSubTitulo'] }</p>
                    <p className="lead">
                        <a href={ data.home['topLinkBtn'] } className='btn btn-outline-primary btn-lg mt-4'>{ data.home['topTextoBtn'] }</a>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width:140px;
                        height: 140px;
                        background-color: #0A197D;
                        color: #fff;
                        font-size: 52px;
                        padding-top: 24px;
                    }.centralizar{
                       margin: 0 auto !important;
                       float: none !important; 
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">
                           { data.home['serTitulo'] }
                        </h2>
                        <p className="lead pb-4">
                           { data.home['serSubTitulo'] }
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">

{/* aqui parei  */}

                               <FontAwesomeIcon icon={ data.home['serUmIcone'] } />
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home['serUmTitulo'] }</h2>
                            <p>
                                { data.home['serUmDesc'] }
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                               <FontAwesomeIcon icon={ data.home['serDoisIcone'] } />
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home['serDoisTitulo'] }</h2>
                            <p>
                                { data.home['serDoisDesc'] }
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={ data.home['serTresIcone'] } />  
                            </div>
                            <h2 className="mt-4 mb-4">{ data.home['serTresTitulo'] }</h2>
                            <p>
                                { data.home['serTresDesc'] }
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />           

        </div>
    )
}



// ESTA DANDO ERRO POIS ESTA TENTANDO CARREGAR DO BANCO , MAS NAO ESTA ENCONTRANDO DADOS
// VERIFICAR NA API O QUE FAZER QDO NAO ENCONTRA INFORMACOES NO BANCO.

// VOU CADASTRAR PELO INSOMIA PARA RESOLVER ISSO, MAS É PONTO DE FALHA
// OK CADASTREI, PARAOU DE APRESENTAR ERRO


// renderiza via NEXT JS 
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/home`);
    const data = await res.json()
    if(data.error != true){
        console.log(" obteve dados no banco ! pelo getServerSideProps")
    }
    // Pass data to the page via props
    return { props: { data } }
  }


export default Home;

// !important - este CSS sobresai a este CSS