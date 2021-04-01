import React from "react"
import error404Image from "./error.404.png"

const Error404 = ()=>{
    return(
        <div className="account-pages my-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-none overflow-hidden">
                            <div className="card-body">
                                <div className="text-center"><h1 className="display-2 font-weight-normal mt-0">404!</h1>
                                    <h4>Sorry, page not found</h4>
                                    <p className="text-muted mb-5">

                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src={error404Image} alt="error 404" className="img-fluid mx-auto d-block" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404