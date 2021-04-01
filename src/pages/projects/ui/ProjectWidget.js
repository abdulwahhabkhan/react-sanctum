import React from 'react'
import {Col, Row} from "react-bootstrap";

const ProjectWidget =() => {
    const status = 'green'
    return(
        <>
            <div className={'panel '+status}>
                <div className="panel-body">
                    <Row>
                        <Col>
                            <div className={'title-link'}>
                                Project title
                            </div>
                            <div className={'project-details'}>
                                Possimus eaque similique praesentium. Temporibus omnis qui fugiat ea culpa ullam. Quia nemo rerum nobis perspiciatis totam vel occaecati quia. Nihil fugiat ut similique porro non saepe ut illo.
                            </div>
                            <Row className={'project-actions'}>
                                <Col sm={2}>
                                    <div className={'project-label'}>
                                        OWNER
                                    </div>
                                    {}
                                    <small>Avatar</small>
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