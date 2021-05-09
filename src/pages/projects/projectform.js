import React, {useEffect, useState} from "react"
import {Button, Modal, Form, Tabs, Tab, Row, Col, Alert} from "react-bootstrap"
import ButtonLoader from "../../components/form/ButtonLoader"
import { useForm, Controller } from "react-hook-form"
import ReactSelect  from "react-select"
import RangeSlider from 'react-bootstrap-range-slider'
import DateTimeInput from "../../components/form/DateTimeInput"
import user from "../../services/users"
import ApiService, {getCSRFCookie} from "../../services/ApiService"

//import project from "./store/reducers/projectReducer";
//import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.scss'

const ProjectForm  =(props)=>{
    const defaultValues = {...props.project}
    const title = defaultValues.id ? 'Edit Project' : 'Add Project'

    const [processing, setProcessing] = useState(0)
    const [validationMessage, setValidationMessage] = useState("")
    const [progress, setProgress] = useState(defaultValues.progress)

    const activeTab = "description";
    const { register, handleSubmit, control, errors, setError} = useForm({defaultValues:defaultValues});
    const [users, setUsers] = useState([])

    useEffect(()=>{
        user.getUsers().then(response=>{
            setUsers(response)
        })
    },[])

    const submitForm = async (data) => {
        let post_data = {...data, progress:progress, owner: data.owner ? data.owner.id : null};
        setProcessing(true)
        await getCSRFCookie().catch(exp=>{
            console.log(exp)
        })
        const url = defaultValues.id ? "projects/"+props.project.id : "projects"
        const method = defaultValues.id ? "PUT" : "POST"
        await ApiService({method:method, url:url, data:post_data}).then(res=>{
            setValidationMessage("")
            props.onClose(false, true)
        }).catch(exp=>{
            let data = exp.response.data
            setValidationMessage(data.message)
            let validationErrors = data.errors
            for(const key in validationErrors){
                setError(key, {type: "server", message:validationErrors[key]})
            }
        }).finally(()=>{
            setProcessing(false)
        })
    }


    return(
        <>
            <Modal show={props.show} backdrop="static" size={'lg'} keyboard={true} onHide={()=> props.onClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <form action="" className="form-horizontal" onSubmit={handleSubmit(submitForm)}>
                            {validationMessage && (
                                <Alert variant={'danger'}>{validationMessage}</Alert>
                            )}
                            <Form.Group>
                                <Form.Label>Project title is:</Form.Label>
                                <Form.Control
                                    name={'name'}
                                    ref={register({required:true})}
                                    isInvalid={errors.name}
                                    placeholder={'like react application'}/>
                                <Form.Control.Feedback type={'invalid'}>{errors.name && errors.name.message}</Form.Control.Feedback>
                            </Form.Group>
                            <div className="nav-htabs">
                                <Tabs defaultActiveKey={activeTab} id="project_form_tabs">
                                    <Tab eventKey="description" title="Description">
                                        <Form.Group>
                                            <Form.Label>Project details</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name={'description'}
                                                ref={register}/>
                                        </Form.Group>
                                    </Tab>
                                    <Tab eventKey="date" title="Date">
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group>
                                                    <Form.Label>Start Date</Form.Label>
                                                    <DateTimeInput
                                                        name={'start_date'}
                                                        size={'md'}
                                                        initialValue={defaultValues.start_date}
                                                        register={register}
                                                    />

                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group>
                                                    <Form.Label>End Date</Form.Label>
                                                    <DateTimeInput
                                                        name={'end_date'}
                                                        size={'md'}
                                                        initialValue={defaultValues.end_date}
                                                        register={register}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="owner" title="Owner">
                                        <Form.Group>
                                            <Form.Label>Owner</Form.Label>
                                            <Controller
                                                as={ReactSelect}
                                                options={users}
                                                theme={theme => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#eee',
                                                        primary: '#265c99b3',
                                                    },
                                                })}
                                                defaultValue={defaultValues.owner}
                                                isClearable
                                                getOptionValue={option => option['id']}
                                                getOptionLabel={option => option['name']}
                                                //onInputChange={updateOwnerHandler}
                                                name={'owner'}
                                                control={control}
                                            />
                                        </Form.Group>
                                    </Tab>
                                    <Tab eventKey="progress" title="Progress">
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label>Project Progress:</Form.Label>
                                                    <RangeSlider
                                                        step={5}
                                                        size={'lg'}
                                                        value={progress}
                                                        name={'progress'}
                                                        ref={register}
                                                        onChange={(e)=>{ setProgress(e.target.value) } }
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltip='on'
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
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
                        loading={processing}>
                        Save Changes
                    </ButtonLoader>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectForm