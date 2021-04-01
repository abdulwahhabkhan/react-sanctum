import React from 'react'
import logo from "../../logo.svg";
import {Navbar, Nav, NavDropdown, Dropdown, Image} from "react-bootstrap"

const Guest = ()=>{
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
                            <Nav.Link href="#home" className={'active'}>Home</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Notifications
                            </Nav.Link>
                            <Dropdown alignRight={true} className={'user-nav'}>
                                <Dropdown.Toggle as={'div'} className="Toggle">
                                    <Image className="" style={{width:"2rem"}}
                                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                           roundedCircle />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/3.1">Profile</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#action/3.4">Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Nav>

                    </Navbar.Collapse>
                </div>

            </Navbar>
        </>

)
}

export default Guest