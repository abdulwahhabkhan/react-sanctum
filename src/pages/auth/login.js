import React, {useState} from 'react'
import {Redirect, Link} from "react-router-dom"
import {withSanctum} from "react-sanctum"
import { useForm } from "react-hook-form"
import Button from '../../components/form/ButtonLoader'
import "./loginStyle.scss"


const Login = ({authenticated, user, signIn}) => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        const email = data.username
        const password = data.password
        const remember = data.remember

        setLoading(true)
        signIn(email, password, remember)
            .then((res) => {
                setLoading(false)
                setErrors({})
            })
            .catch((e) => {
                setErrors(e.response.data)
                setLoading(false)
            });
    };
    if(authenticated)
        return <Redirect to="/" />
    else
    return (
        <>
            <div className="account-pages my-5 pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-none">
                                <div className="card-body">
                                    <h4 className="font-size-18 mt-2 text-center">Welcome Back !</h4>
                                    <p className="text-muted text-center mb-4">Sign in to continue.</p>
                                    {errors && (
                                        <div className={'alert alert-danger'}>
                                            { errors.message}
                                        </div>
                                    )}
                                    <form className="form-horizontal" onSubmit={handleSubmit(handleLogin)}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" id="username" name="username" placeholder="Enter email"
                                            className="form-control" ref={register}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <input type="password" id="userpassword" name={'password'} placeholder="Enter password"
                                            className="form-control" ref={register}/>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" ref={register}
                                                   id="remember" name="remember"
                                                   className="custom-control-input" />
                                            <label htmlFor="remember" className="custom-control-label">Remember me</label>
                                        </div>
                                        <div className="mt-3">
                                            <Button loading={loading} className="btn-block" type="submit" >Log In</Button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <Link className="" to="/forgot-password">Forgot your password? </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default withSanctum(Login)