import React, { useState } from 'react';
import "./Style/Header.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="navbar-section px-5" color="dark" dark expand="md">
            <div className="navbar-section-brand">
                <NavbarBrand style={{ fontSize: "30px", fontWeight: "bold", padding: "100px" }} href="/">Garir Bazar</NavbarBrand>
            </div>
            <NavbarToggler onClick={toggle} />
            <div style={{marginLeft: "50rem"}}>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Buyers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sellers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;