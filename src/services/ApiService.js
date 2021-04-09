import axios from "axios"
import {store as exception} from '../components/ui/exceptionmodal'

const ApiService = axios.create();
const baseURL = process.env.REACT_APP_API_DOMAIN
ApiService.defaults.baseURL = baseURL+"/api/";
ApiService.defaults.withCredentials = true;
ApiService.interceptors.response.use(response => {
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

const getCSRFCookie = async () => {
    await axios.get(baseURL + "/sanctum/csrf-cookie");
}
export { ApiService, getCSRFCookie}

export default ApiService