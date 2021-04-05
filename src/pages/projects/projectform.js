import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import ButtonLoader from "../../components/form/ButtonLoader";

const ProjectForm  =(props)=>{
    const title = props.project ? 'Edit Project' : 'Add Project'
    const [loading, setLoading] = useState(false)
    return(
        <>
            <Modal show={props.show} size={'lg'} centered onHide={()=> props.onClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form-horizontal">
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default" className={'mr-auto'} onClick={() => props.onClose(false)}>
                        Close
                    </Button>
                    <ButtonLoader className={'btn btn-form'} type={'submit'}  loading={loading}>Save Changes</ButtonLoader>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectForm