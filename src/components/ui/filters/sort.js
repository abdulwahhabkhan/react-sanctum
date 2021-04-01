import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown'
import './Sort.scss'
import PropTypes from 'prop-types'

const Sort = ({
    sortOrder = 'asc',
    sort = '',
    options = [{value: 'id', text: 'default'}],
    sortHandler= function(data){console.log('No handler specified')},
    orderHandler= function(data){console.log('No handler specified')},
    ...rest
              })=>{
    const sortIcon = sortOrder === 'asc' ? faArrowDown : faArrowUp;
    const selected = options.find((row, idx)=>{
        return row.value === sort;
    });

    const ddOptions = options.map((row, idx)=>{
        let active = row.value === sort;
        return <li key={idx}><Dropdown.Item as='button' active={active} onClick={()=>sortHandler(row)}>{row.text}</Dropdown.Item></li>
    });
    return(
        <Fragment>
            <div className="sort-filter">
                <Dropdown className={'btn-group'} alignRight>
                    <Dropdown.Toggle variant="default" size={'sm'}>
                        <span className={'text-bold'}>Sort By: </span>
                        { selected ? selected.text: 'Default' }
                    </Dropdown.Toggle>

                    <Dropdown.Menu as='ul'>
                        {ddOptions}
                    </Dropdown.Menu>
                </Dropdown>
                <button className="btn btn-default btn-sm" onClick={()=>orderHandler(sortOrder)} title={'Sort order is: ' + (sortOrder === 'asc' ? 'Ascending' : 'Descending')}>
                    <FontAwesomeIcon icon={sortIcon} />
                </button>
            </div>
        </Fragment>
    )

}

Sort.propTypes = {
    sortOrder: PropTypes.string,
    sort: PropTypes.string,
    options : PropTypes.array,
    sortHandler : PropTypes.func,
    orderHandler : PropTypes.func
}

export default Sort