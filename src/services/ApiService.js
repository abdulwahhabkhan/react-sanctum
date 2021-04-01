import axios from "axios"
import {store as exception} from '../components/ui/exceptionmodal'

const ApiService = axios.create();



axios.interceptors.response.use(response => {
    return response;
}, err => {
    //const dispatch = useDispatch()
    return new Promise((resolve, reject) => {
        const ignoreCodes = [422]
        if(err && err.response && err.response.status > 400 && ignoreCodes.indexOf(err.response.status) === -1){
            const response = err.response
            exception.addException({
                status: response.status,
                message: response.statusText,
                info: JSON.stringify(response.data, null, 2),
            })
        }
        throw err.response !== undefined ? err : {...err, response: {}}

    });
});


export default ApiService