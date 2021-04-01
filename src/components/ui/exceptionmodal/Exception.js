import React, {Component, Fragment} from 'react'
import store from "./store";
import {Modal} from "react-bootstrap";
import './exception.scss';

class Exception extends Component {
    state = {
        exception: null,
        show: false
    }
    componentDidMount() {
        store.register({
            addException: this.add,
            removeException: this.remove,
        });
    }

    add = (exception)=>{
        this.setState({exception:exception, show: true})
    }

    remove = ()=>{
        this.setState({exception:null, show: false})
    }

    renderException = ()=>{
        const exception = this.state.exception;
        if(exception){
            return(
                <Modal size={'xl'} show={this.state.show} centered onHide={this.remove} className={'exception'} backdrop={'static'} >
                    <div className="status-line" />
                    <Modal.Header closeButton>
                        <Modal.Title>{exception.status}: {exception.message}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <pre>
                            {exception.info}
                        </pre>
                    </Modal.Body>
                </Modal>
            )
        }
    }

    render() {
        return(
            <Fragment>
                {this.renderException()}
            </Fragment>
        )
    }
}

export default Exception