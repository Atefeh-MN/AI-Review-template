import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Navbar, Nav, Form, InputGroup,NavDropdown } from "react-bootstrap";
import useSidebar from "../../hooks/useSidebar";
import NavbarLanguages from "./NavbarLanguages";
import Container from 'react-bootstrap/Container';
import NavBarAuth from "./NavbarAuth";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ShoppingCart } from "iconsax-react";
import i18n from "../../i18n";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <Navbar collapseOnSelect expand='lg' >  
      <Container fluid style={{width:'90%',fontSize:'initial'}}>
        <Navbar.Brand style={{color:"#ba68c8",fontSize:'1.5rem'}} href="#home">MARLO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Offcanvas
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav style={{margin:'0 3rem'}}>
           <Link className="nav-link" to='/'>{t('home')}</Link>
            <Link className="nav-link" to='/blog'>{t('blog')}</Link>
            <Link className="nav-link" to='/pricing'>{t('pricing')}</Link>
            <Link className="nav-link" to='/dashboard'>{t('dashboard')}</Link>
           <Link className="nav-link" to='/about'>{t('about')}</Link>
             </Nav>
             <Nav className={i18n.language==='en'?'ms-auto':"me-auto"}>
                <NavBarAuth/>
               <Link className="nav-link p-2 mx-3" to='/cart'> 
                  <ShoppingCart size="28" color="#ba68c8"/></Link>
              </Nav>
              <NavbarLanguages/>
                </Offcanvas.Body>
        </Navbar.Offcanvas>
        
      </Container>
       
    </Navbar>
  );
};
export default NavbarComponent;