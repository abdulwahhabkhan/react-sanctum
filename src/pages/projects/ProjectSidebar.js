import React from "react";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faRetweet} from "@fortawesome/free-solid-svg-icons";

const ProjectSidebar = ()=>{
    const { handleSubmit, register, reset} =  useForm()
    const onSubmit = data => {
        console.log(data)
    }
    const resetFilters = ()=> {
        reset({})
    }
    return(
        <>
            <div className={'project-filter-list'}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="filter-block">
                        <div className="filter-header">Keyword</div>
                        <div className="filter-body">
                            <input type="text"
                                   name="keyword"
                                   ref={register()}
                                   className={'form-control form-control-sm'}
                                   placeholder={'title or description'}/>
                        </div>
                    </div>
                    <div className="filter-block">
                        <div className="filter-body">
                            <button className="btn btn-default btn-sm" onClick={()=> resetFilters() } type={"button"}>
                                <FontAwesomeIcon icon={faRetweet} /> Reset Filter
                            </button>
                            <button type="submit" className="btn btn-primary float-right btn-sm">
                                <FontAwesomeIcon icon={faFilter} /> Apply Filter
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProjectSidebar;