import ApiService from "../ApiService";



class Projects {

    getProject = (id)=>{
        console.log("Get Project called");
        return new Promise((resolve, reject)=>{
            ApiService({
                method: 'get',
                url: 'project/'+id
            }).then(response => {
                if(response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            }).catch(res =>{
                reject(res);
            });
        })
    }

    getProjects = (filters) => {
        const params = {completed:0, sort: 'id', order: 'asc', ...filters};
        const qry_str = Object.keys(params).map(key => key.toLowerCase() + "="+encodeURI(params[key])).join('&');
        return new Promise((resolve, reject)=>{
            ApiService({
                method: 'get',
                url: 'projects?'+qry_str
            }).then(response => {
                if(response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            }).catch(res =>{
                reject(res);
            });
        })
    }

    saveProject = (data)=>{
        const method = data.id ? 'PUT' : 'POST';
        const url = data.id ? 'project/'+data.id : 'project'
        return new Promise((resolve, reject)=>{
            ApiService({
                method: method,
                url: url,
                data: data
            }).then(response =>{
                resolve(response.data);
            }).catch(res =>{
                reject(res);
            })
        })
    }

    completeProject = (data)=>{
        const url =  'project/'+data.id+'/complete'
        return new Promise((resolve, reject)=>{
            ApiService({
                method: 'PUT',
                url: url,
                data: data
            }).then(response =>{
                resolve(response.data);
            }).catch(res =>{
                reject(res);
            })
        })
    }

}

const instance = new Projects();
export default instance;