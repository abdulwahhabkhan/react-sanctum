import * as PActions from './index'
import projects from '../../../../services/projects'
import storage from "../../../../config/storage";
import {filters} from "../../config";


export function getProjects(params){
    const queryString = {
        ...params
    }
    return (dispatch)=>{
        dispatch({type:PActions.LOADING_PROJECTS})
        projects.getProjects(queryString).then(res => {
            //dispatch({type:PActions.LOADING_PROJECTS})
            return dispatch({type: PActions.GET_PROJECTS,  payload: res})
        })
    }
}

export function addProject(data) {

}

export function editProject(data) {

}

export function deleteProject(id) {

}

export const applyfilters = (payload) => (dispatch)=>{
    const projectFilters = {...filters, ...payload}
    storage.set(PActions.PROJECT_FILTERS, JSON.stringify(projectFilters))
    dispatch({type: PActions.PROJECT_FILTERS, payload: projectFilters})
}

export const applySort = (payload)=> (dispatch)=>{
    storage.set(PActions.PROJECT_SORT, payload)
    dispatch({type: PActions.PROJECT_SORT, payload })
}

export const applyOrder = (payload) => (dispatch)=>{
    storage.set(PActions.PROJECT_ORDER, payload)
    dispatch({type: PActions.PROJECT_ORDER, payload })
}

export const getNextPage = (payload) => (dispatch)=>{
    storage.set(PActions.PROJECT_PAGINATION, payload)
    dispatch({type: PActions.PROJECT_PAGINATION, payload })
}
