import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <style>
                {`.menu-custom{
                    background-color: #041370;
                }`}
            </style>
            <Navbar className="menu-custom" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Holanda</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/orcamento">Orçamento</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Ajuda
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Sobre
                                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Versão
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;


/*
function Menu(){
  return (
      <div>
          <a href='/'>Home</a><br />
          <a href='/orcamento'>Orçamento</a><br />
          <a href='/help'>Help</a><br />
      </div> 
  )    
}

// Formatar codigo - No Windows Shift + Alt + F.
*/

/*
Menu
Navbar
conteudo
*/