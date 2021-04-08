import React, {useState} from "react"
import {Button, Modal, Form, Tabs, Tab, Row, Col} from "react-bootstrap"
import ButtonLoader from "../../components/form/ButtonLoader"
import { useForm, Controller } from "react-hook-form"
import ReactSelect  from "react-select"
import RangeSlider from 'react-bootstrap-range-slider'
//import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.scss'

const ProjectForm  =(props)=>{
    const title = props.project ? 'Edit Project' : 'Add Project'
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const activeTab = "description";
    const owner = {"id":1, "name":'Default'}
    const { register, handleSubmit, control} = useForm();
    const users = [{"id":1, "name":'Default'},{"id":2, "name":'Abdul'}]
    const submitForm = (data) => {
        console.log({...data, progress:progress})
    }
    const updateOwnerHandler = ()=>{

    }
    return(
        <>
            <Modal show={props.show} size={'lg'} keyboard={true} onHide={()=> props.onClose(false)}>
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


                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label>End Date</Form.Label>

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
                                            isClearable
                                            defaultValue={[owner]}
                                            getOptionValue={option => option['id']}
                                            getOptionLabel={option => option['name']}
                                            onChange={updateOwnerHandler}
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
                                                <Controller
                                                    name={'progress2'}
                                                    control={control}
                                                    value={progress}
                                                    onChange={(e)=>{ setProgress(e.target.value) } }
                                                    render={({ field }) => <RangeSlider
                                                        {...field}
                                                        step={5}
                                                        size={'lg'}



                                                        //onChange={(e)=>{ setProgress(e.target.value) } }
                                                        tooltipLabel={currentValue => `${currentValue}%`}
                                                        tooltip='on'
                                                    />}
                                                />
                                                {/*<RangeSlider
                                                    step={5}
                                                    size={'lg'}
                                                    value={progress}
                                                    name={'progress'}
                                                    ref={register}
                                                    onChange={(e)=>{ setProgress(e.target.value) } }
                                                    tooltipLabel={currentValue => `${currentValue}%`}
                                                    tooltip='on'
                                                />*/}
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
                        loading={loading}>
                        Save Changes
                    </ButtonLoader>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectForm