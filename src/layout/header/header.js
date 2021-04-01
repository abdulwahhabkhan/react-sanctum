import React from 'react'
import {NavLink, useHistory} from "react-router-dom"
import logo from "../../logo.svg"
import {Navbar, Nav, Dropdown, Image} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-solid-svg-icons";

const Header = ({user, logout})=>{
    const history = useHistory()
    const signOut =()=>{
        logout().then((res)=>{
            history.push("/")
        }).catch((err)=>{
            console.log(err)
        })

    }

    return(
        <>
            <Navbar bg="dark" variant="dark dark-bg" fixed="top">
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
                            <NavLink to={'/dashboard'} exact className={'nav-link'} activeClassName={'active'}>Dashboard</NavLink>
                            <NavLink to={'/projects'} className={'nav-link'} activeClassName={'active'}>Projects</NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} >
                                <FontAwesomeIcon icon={faBell} />
                            </Nav.Link>
                            <Dropdown alignRight={true} className={'user-nav'}>
                                <Dropdown.Toggle as={'div'} className="Toggle">
                                    <Image className="" style={{width:"2rem"}}
                                           src={user.profile_photo_url}
                                           roundedCircle alt={user.name} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item >Profile</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={()=> signOut()} >Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Nav>

                    </Navbar.Collapse>
                </div>

            </Navbar>
        </>
    )
}

export default Header