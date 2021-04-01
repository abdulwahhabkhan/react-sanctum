import {combineReducers} from 'redux'


import projects from "../../pages/projects/store/reducers"
//import tickets from "../../pages/projects/tickets/store/reducers"

const createReducer = (asyncReducers) =>
    combineReducers({
        projects,
        //tickets,
        ...asyncReducers
    })

export default createReducer
