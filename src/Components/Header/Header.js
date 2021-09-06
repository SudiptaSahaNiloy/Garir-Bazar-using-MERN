import React from 'react';
import "./Style/Header.css";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import { Component } from 'react';
import { authLogout } from '../../Redux/authActionCreator';

const mapStateToProps = (state) => {
    return {
        customerId: state.customerId,
        customerName: state.customerName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authLogout: () => dispatch(authLogout())
    }
}

class Header extends Component {
    // const[isOpen, setIsOpen] = useState(false);
    state = {
        isOpen: false,
    }

    render() {
        const toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen,
            })
        };

        // console.log(this.props.customerName);

        return (
            <Navbar className="navbar-section" color="dark" dark expand="md" >
                <div className="navbar-section-brand">
                    <NavbarBrand style={{ fontSize: "30px", fontWeight: "bold", padding: "100px" }} href="/home">Garir Bazar</NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle} />
                <div style={{ width: "100%" }}>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/companies">Companies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>

                            {this.props.customerName !== null ?
                                <div>
                                    <NavItem>
                                        <NavLink href="#">{this.props.customerName}</NavLink>
                                    </NavItem>
                                </div>
                                :
                                <NavItem>
                                    <NavLink href="/login">Login</NavLink>
                                </NavItem>
                            }

                            {this.props.customerName !== null ?
                                <NavItem>
                                    <NavLink
                                        href="/login"
                                        onClick={() => this.props.authLogout()}>
                                        Logout
                                    </NavLink>
                                </NavItem>
                                :
                                null
                            }                            
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);