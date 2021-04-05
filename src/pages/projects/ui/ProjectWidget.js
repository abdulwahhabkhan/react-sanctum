import React, {useState} from 'react'
import {Col, OverlayTrigger, Popover, ProgressBar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import Avatar from "react-avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faEllipsisV, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import settings from "../../../config/settings";

const ProjectWidget =(props) => {
    const [show, setShow] = useState(false);
    const status = new Date(props.project.end_date) > new Date() ? 'green' : 'orange'
    const handleClick = (event) => {
        setShow(!show);
    };
    return(
        <>
            <div className={'panel '+status}>
                <div className="panel-body">
                    <Row>
                        <Col>
                            <div className={'title-link'}>
                                <Link to={'/projects/'+props.project.id+'/tickets'}>{props.project.name}</Link>
                            </div>
                            <div className={'project-details'}>
                                {props.project.description}
                            </div>
                            <Row className={'project-actions'}>
                                <Col sm={2}>
                                    <div className={'project-label'}>
                                        OWNER
                                    </div>
                                    {}
                                    <small>{ props.project.owner &&
                                    <Avatar name={props.project.owner.name} src={props.project.owner.profile_photo_url} size="25"
                                            textSizeRatio={1.2}
                                            round={true} style={{fontFamily:'inherit'}} />
                                    }</small>
                                </Col>
                                <Col sm={4}>
                                    <div className={'project-label'}>
                                        DEADLINE
                                    </div>

                                    <Moment
                                    format={settings.DATEFROMAT}
                                    date={props.project.end_date} />

                                </Col>
                                <Col sm={4}>
                                    <div className={'project-label'}>
                                        PROGRESS
                                    </div>
                                    <ProgressBar className={'m-t-xs'} now={props.project.progress} label={`${props.project.progress}%`} variant="success" />
                                </Col>
                                <Col sm={2} className={'text-right'}>
                                    <div className={'project-label'}>
                                        &nbsp;
                                    </div>

                                    <OverlayTrigger
                                    //trigger={['focus', 'click']}
                                    placement="left"
                                    show={show}
                                    delay={200}
                                    overlay={
                                        <Popover id={props.project.id}>
                                            <Popover.Content>
                                                <ul className="popover-actions">
                                                    <li onClick={()=>{handleClick();props.onDelete(props.project.id);}}>
                                                        <FontAwesomeIcon icon={faTimes} size={'2x'} />
                                                        Delete
                                                    </li>
                                                    <li onClick={()=>{handleClick();props.onEdit(props.project)}}>
                                                        <FontAwesomeIcon icon={faPencilAlt} size={'2x'} />
                                                        Edit
                                                    </li>
                                                    <li onClick={()=>{handleClick();props.onComplete(props.project.id)}}>
                                                        <FontAwesomeIcon icon={faCheck} size={'2x'}  />
                                                        Complete
                                                    </li>
                                                </ul>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <button className={'btn btn-sm btn-circle btn-grey'} onClick={handleClick}>
                                        <FontAwesomeIcon icon={faEllipsisV} />
                                    </button>
                                </OverlayTrigger>

                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </div>
        </>
    )
}

export default ProjectWidget