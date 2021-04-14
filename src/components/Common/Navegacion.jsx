import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function Navegacion(props) {
  return (
    <>
    <Navbar bg="secondary" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={props.logo}
                        width="50"
                        height="60"
                    />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <NavLink exact={true} to='/' className="nav-link">Inicio</NavLink>
                            <NavLink exact={true} to='/productos' className="nav-link">Productos</NavLink>
                            <NavLink exact={true} to='/productos/nuevo' className="nav-link">Agregar Productos</NavLink>
                    </Nav>
            </Navbar.Collapse>
    </Navbar>
    </>
  );
}
