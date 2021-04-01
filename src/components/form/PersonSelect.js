import React, {useState} from 'react';
import SelectSearch from 'react-select-search';
import Avatar from "react-avatar";

const PersonSelect = ({ options, value, multiple, disabled, placeholder, name, onChange }) => {

    const [state, setState] = useState('')

    function renderOption(props, option, snapshot, className) {
        const optionClass = 'filter-items__item-block '+className
        return (
            <React.Fragment >
                <button {...props} className={optionClass} type={'button'} >
                    <small><Avatar name={option.name} size="20" textSizeRatio={1.2} round={true} style={{fontFamily:'inherit', marginRight:'5px'}}  /> </small>
                    {option.name}
                </button>
            </React.Fragment>

        );
    }

    const removeOption =(val, values)=>{
        onChange(values.map((r)=> r.value ).filter(v => v !== val))
    }
    const printOption = state ? 'always' : 'on-focus'
    return (
        <div>
           <SelectSearch
                options={options}
                value={value}
                name={name}
                multiple={multiple}
                search={true}
                onChange={onChange}
                placeholder={placeholder}
                printOptions={printOption}
                closeOnSelect={!multiple}
                renderOption={renderOption}
                renderValue={(valueProps, snapshot, className)=>{

                    const values =  Array.isArray(snapshot.value) ? snapshot.value : [snapshot.value]

                   return (
                        <div>
                            <ul className="filter-items-select">
                                { values.map((option)=>{
                                    value = "";

                                    return option && (
                                        <li key={option._id}>
                                            <button className="filter-items-item"
                                                    type={"button"} value={option.value}
                                                    onClick={()=> removeOption(option.value, values) }
                                            >
                                                <div className="filter-items-item-text">
                                                    <small><Avatar name={option.name} size="20" textSizeRatio={1.2} round={true} style={{fontFamily:'inherit', marginRight:'5px'}}  /></small>
                                                    <span className="auto-complete-item-title">
                                                        {  option.name }
                                                    </span>
                                                </div>
                                                <div className="filter-items-item-remove" >
                                                    <span className="filter-items-item-clear">
                                                        X
                                                    </span>
                                                </div>
                                            </button>
                                        </li>
                                    )
                                })}

                            </ul>
                            <input
                                {...valueProps}
                                onChange={(t)=>{
                                    valueProps.onChange(t);
                                    setState(t.target.value)
                                }}
                                onFocus={(e)=>{
                                    valueProps.onChange(e);
                                }}
                                onBlur={(e)=>{
                                    if(!state)
                                    valueProps.onBlur(e)
                                }}
                                value={state} className={'form-control form-control-sm'} />
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default PersonSelect