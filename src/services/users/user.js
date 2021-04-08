import ApiService from "../ApiService";

class User {

    getUsers =()=>{
        return new Promise( (resolve, reject) =>{
            ApiService.get('users')
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => console.log(err))
        })
    }
}

const instance = new User();
export default instance;