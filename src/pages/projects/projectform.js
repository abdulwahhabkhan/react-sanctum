import React, {useState} from "react";
import {Button, Modal, Form, Tabs, Tab} from "react-bootstrap";
import ButtonLoader from "../../components/form/ButtonLoader";
import { useForm } from "react-hook-form"

const ProjectForm  =(props)=>{
    const title = props.project ? 'Edit Project' : 'Add Project'
    const [loading, setLoading] = useState(false)
    const activeTab = "description";
    const { register, handleSubmit } = useForm();
    const submitForm = (data) => {
        console.log(data)
    }
    return(
        <>
            <Modal show={props.show} size={'lg'} centered onHide={()=> props.onClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form-horizontal" onSubmit={handleSubmit(submitForm)}>
                        <Form.Group>
                            <Form.Label>Project title is:</Form.Label>
                            <Form.Control
                                name={'name'}
                                ref={register}
                                placeholder={'like react application'}/>
                            <Form.Control.Feedback type={'invalid'}>Required</Form.Control.Feedback>
                        </Form.Group>
                        <div className="nav-htabs">
                            <Tabs defaultActiveKey={activeTab} id="project_form_tabs">
                                <Tab eventKey="description" title="Description">
                                    <Form.Group>
                                        <Form.Label>Provide a Description </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name={'description'}
                                            ref={register}/>
                                    </Form.Group>
                                </Tab>
                            </Tabs>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className={'mr-auto'} onClick={() => props.onClose(false)}>
                        Close
                    </Button>
                    <ButtonLoader
                        className={'btn btn-form'} type={'submit'}
                        onClick={handleSubmit(submitForm)}
                        loading={loading}>
                        Save Changes
                    </ButtonLoader>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectForm