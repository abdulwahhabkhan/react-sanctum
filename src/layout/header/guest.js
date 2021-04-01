import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../../logo.svg"
import {Navbar, Nav} from "react-bootstrap"

const Header = ()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark dark-bg">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact to="/" activeClassName={'active'} className="nav-link">Home</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/login" activeClassName={'active'} className="nav-link">Login</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </div>

            </Navbar>
        </>

)
}

export default Header