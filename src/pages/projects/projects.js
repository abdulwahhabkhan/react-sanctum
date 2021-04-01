import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {Col, Row} from "react-bootstrap"
import {Redirect, useLocation} from "react-router"
import {NavLink} from "react-router-dom"
import {ProjectWidget} from "./ui";

const Projects = ()=>{
    const location = useLocation()
    if(location.pathname === "/projects")
        return(
            <Redirect
                to={{
                    pathname: "/projects/current",
                    search: "",
                    state: { referrer: location.pathname }
                }}
            />
        )

    const title = location.pathname ==="/projects/current" ? "Current Projects" : "Completed Projects"

    return(
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="list-options">
                        <div className="title">{title}</div>
                        <div className="btn-options text-right">
                            <button className="btn btn-sm btn-primary w-10">
                                <FontAwesomeIcon icon={faPlusCircle} />&nbsp;
                                Add Project
                            </button>
                        </div>
                    </div>
                </div>
                <Col sm={12}>
                    <div className="nav-htabs">
                        <ul className="nav nav-tabs">
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/current'} className={'nav-link'}>Current</NavLink>
                            </li>
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/completed'} className={'nav-link'}>Completed</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="tab-content">
                        <Row>
                            <Col lg={4} className={'projects'}>
                                <ProjectWidget />
                            </Col>
                            <Col lg={4} className={'projects'}>
                                <ProjectWidget />
                            </Col>
                            <Col lg={4} className={'projects'}>
                                <ProjectWidget />
                            </Col>
                        </Row>
                    </div>
                </Col>

            </div>
        </>
    )
}

export default Projects