import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {Col, Row} from "react-bootstrap"
import {Redirect, useLocation} from "react-router"
import {NavLink} from "react-router-dom"
import {ProjectWidget} from "./ui"
import SortFilter from "../../components/ui/filters/sort";
import {useDispatch, useSelector} from "react-redux"
import {getProjects} from "./store/actions";
import ApiService from "../../services/ApiService";

//import {applyfilters, applyOrder, applySort, getProjects} from './store/actions'

const Projects = ()=>{
    const projectsStore = useSelector(state => state.projects.project);
    const {sortBy, orderBy, filters} = projectsStore
    const [projects, setProjects] = useState([]);
    const [pagination, setPagination] = useState({totalRecords: 0});

    const location = useLocation()
    /*if(location.pathname === "/projects")
        return(
            <Redirect
                to={{
                    pathname: "/projects/current",
                    search: "",
                    state: { referrer: location.pathname }
                }}
            />
        )*/
    const completed = location.pathname ==="/projects/current" ? 0 : 1
    const pageHeading = completed ? "Completed Projects" : "Current Projects"
    const sortOptions = [
        {value: 'id', text:'Default'},
        {value: 'created_at', text:'Created Date'},
        {value: 'updated_at', text:'Last Modified'},
        {value: 'name', text:'Project Name'},
        {value: 'due_date', text:'Due Date'}
    ];

    useEffect(()=>{
        //dispatch = useDispatch(getProjects());
        (
            async () => {
                const {data} = await ApiService.get(`projects?completed=${completed}`);
                setProjects(data.data)
                setPagination({totalRecords: data.total})
            }

        )()
    }, [completed])


    const sortHandler = (option) =>{
        //this.props.applySort(option.value)
        //this.getProjects({sortBy:option.value })
    }

    const sortOrderHandler= (sorder) =>{
        const order = sorder === 'asc' ? 'desc' : 'asc';
        console.log(order)
        //this.props.applyOrder(norder)
        //this.getProjects({orderBy:norder })
    }

    return(
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="list-options">
                        <div className="title">{pageHeading}</div>
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
                            <Col sm={12}>
                                <div className="list-options">
                                    <div>{ pagination.totalRecords } results</div>
                                    <div className="btn-options text-right">
                                        <SortFilter
                                            options={sortOptions}
                                            sortOrder={orderBy}
                                            sort={sortBy}
                                            sortHandler={sortHandler}
                                            orderHandler={sortOrderHandler} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {
                                projects.map((project, index)=>{
                                    return (
                                        <Col lg={4} className={'projects'} key={index}>
                                            <ProjectWidget project={project} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>

            </div>
        </>
    )
}

/*function mapDispatchToProps(dispatch) {
    return {
        loadProjects: params => dispatch(getProjects(params)),
        applySort: params => dispatch(applySort(params)),
        applyOrder: params => dispatch(applyOrder(params)),
        resetFilters: params=> dispatch(applyfilters(params))
    };
}
const mapStateToProps = state => {
    return {
        projects :  state.projects.project
    };
}*/

export default Projects