import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

// Active styles
const activeStyles = {
    color: "orange",
    fontWeight: "bold"
}
const Header = () => {
    return (
        <Navbar className="py-4" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold fs-3" to="/home">Swimming School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeStyle={activeStyles} className="navItem mx-2 p-2 text-decoration-none" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyles} className="navItem mx-2 p-2 text-decoration-none" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyles} className="navItem mx-2 p-2 text-decoration-none" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyles} className="navItem mx-2 p-2 text-decoration-none" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;