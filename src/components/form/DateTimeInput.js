import React from "react"
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar} from "@fortawesome/free-solid-svg-icons"
import {InputGroup} from "react-bootstrap"
import settings from "../../config/settings"

const DateTimeInput =({name, size, register, initialValue, updateDate})=>{
    const renderInput = (props, openCalendar, closeCalendar) => {

        function clear() {
            props.onChange({ target: { value: "" } });
        }
        return (
            <div>
                <InputGroup>
                    <input type="text" {...props}/>
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">
                            <FontAwesomeIcon icon={faCalendar} onClick={openCalendar}/>
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }

    return(
        <Datetime
            initialValue={initialValue}
            renderInput={renderInput}
            inputProps={{className: 'form-control form-control-'+size, ref: register, name:name, placeholder:'Select date'}}
            onChange={updateDate}
            dateFormat={settings.FORM_DATE_FORMAT}
            closeOnSelect={true}
            timeFormat={false}/>
    )
}

export default DateTimeInput
