import React, {lazy, Suspense, useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {Col, Row} from "react-bootstrap"
import {useLocation} from "react-router"
import {NavLink} from "react-router-dom"
import {ProjectWidget} from "./ui"
import SortFilter from "../../components/ui/filters/sort";
import {useDispatch, useSelector} from "react-redux"
import {getProjects, applyOrder, applySort} from "./store/actions";
import {LoadingSpinner} from "../../components/ui/loader";
import ApiService from "../../services/ApiService";
import {store as notification} from "react-notifications-component";
import settings from "../../config/settings";

const ProjectForm = lazy(() => import("./projectform"))
//import ApiService from "../../services/ApiService";

//import {applyfilters, applyOrder, applySort, getProjects} from './store/actions'

const Projects = ()=>{
    const projectsStore = useSelector(state => state.projects.project);
    const {sortBy, orderBy, rows, pagination, filters, loading} = projectsStore
    const [showForm, setShowForm] = useState(0)
    const [project, setProject] = useState({})
    const location = useLocation()
    const dispatch = useDispatch()
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
        dispatch(getProjects({
            completed: completed
        }))
        return () => {
            //
        };
    }, [dispatch, completed, filters, orderBy, sortBy])


    const sortHandler = (option) =>{
        dispatch(applySort(option.value))
    }

    const getProject = async (id) =>{
        if(id === 0)
            return

        await ApiService.get("projects/"+ id).then(res=>{
            setProject(res.data)
            setShowForm(true)
        }).catch(exp=>{
            console.log({...exp})
        }).finally(()=>{

        })
    }

    const addProjectHandler = ()=>{
        setProject({})
        setShowForm(true)
    }

    const sortOrderHandler= (sOrder) =>{
        const order = sOrder === 'asc' ? 'desc' : 'asc';
        dispatch(applyOrder(order))
    }
    const editProjectHandler = (projectId)=>{
        getProject(projectId)
    }
    const projectFormHandler = (flag, update)=>{
        setProject([])
        setShowForm(flag)
        console.log(update)
        if(update !== undefined){
            notification.addNotification({
                ...settings.NOTIFICATION,
                type: 'success',
                title: "Success",
                message: "Project save successfully"
            });
        }
    }
    const deleteProjectHandler = (id)=>{
        //ask for confirmation and delete the project

    }
    const completeProjectHandler = (id)=>{

    }

    return(
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="list-options">
                        <div className="title">{pageHeading}</div>
                        <div className="btn-options text-right">
                            <button className="btn btn-sm btn-primary w-10" onClick={addProjectHandler}>
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
                            {loading === true &&(
                                <LoadingSpinner delay={1.5*1000} />
                            )}
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
                                !loading && rows.map((project, index)=>{
                                    return (
                                        <Col lg={4} className={'projects'} key={index}>
                                            <ProjectWidget
                                                onEdit={editProjectHandler}
                                                onDelete={deleteProjectHandler}
                                                onComplete={completeProjectHandler}
                                                project={project} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>
                {
                    showForm === true && (
                        <Suspense fallback={<div>loading form..</div>}>
                            <ProjectForm show={true} project={project} onClose={projectFormHandler} />
                        </Suspense>
                    )
                }
            </div>
        </>
    )
}

export default Projects