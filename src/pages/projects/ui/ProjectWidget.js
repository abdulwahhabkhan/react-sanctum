import React from 'react'
import { Col, ProgressBar, Row, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import Avatar from "react-avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faEllipsisV, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import settings from "../../../config/settings";



const ProjectWidget =React.memo((props) => {

        const status = new Date(props.project.end_date) > new Date() ? 'green' : 'orange'

        return (
            <>
                <div className={'panel ' + status}>
                    <div className="panel-body">
                        <Row>
                            <Col>
                                <div className={'title-link'}>
                                    <Link to={'/projects/' + props.project.id + '/tickets'}>{props.project.name}</Link>
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
                                        <small>{props.project.owner &&
                                        <Avatar name={props.project.owner.name} src={props.project.owner.profile_photo_url}
                                                size="25"
                                                textSizeRatio={1.2}
                                                round={true} style={{fontFamily: 'inherit'}}/>
                                        }</small>
                                    </Col>
                                    <Col sm={4}>
                                        <div className={'project-label'}>
                                            DEADLINE
                                        </div>

                                        <Moment
                                            format={settings.DATE_FORMAT}
                                            date={props.project.end_date}/>

                                    </Col>
                                    <Col sm={4}>
                                        <div className={'project-label'}>
                                            PROGRESS
                                        </div>
                                        <ProgressBar className={'m-t-xs'} now={props.project.progress}
                                                     label={`${props.project.progress}%`} variant="success"/>
                                    </Col>
                                    <Col sm={2} className={'text-right'}>
                                        <div className={'project-label'}>
                                            &nbsp;
                                        </div>
                                        <Dropdown drop={'left'} className={'dropdown-actions'} >
                                            <Dropdown.Toggle

                                                className={'btn-circle'}
                                                id={`action_${props.project.id}`}
                                                variant={'grey'}
                                                size={'sm'}
                                            >
                                                <FontAwesomeIcon  icon={faEllipsisV}/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    onClick={() => {
                                                        props.onEdit(props.project.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon className={'svg-icon'} icon={faPencilAlt} />
                                                    Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() => {
                                                        props.onDelete(props.project.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon className={'svg-icon'} icon={faTimes} />
                                                    Delete
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() => {
                                                        props.onComplete(props.project.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon className={'svg-icon'} icon={faCheck} />
                                                    Complete
                                                </Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>{' '}

                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </div>
                </div>
            </>
        )
    }
)

export default ProjectWidget