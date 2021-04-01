import React from 'react'
import { withSanctum } from "react-sanctum"


const Home = ({ authenticated})=>{
    return (
        <div>
            <div className="container mx-auto pt-5">
                <div className="my-4 text-center">
                    <h2 className="text-4xl font-weight-bold mb-2">
                        Welcome to React Projects
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-700">
                        Powered by Laravel Sanctum with cookie base authentication
                    </h3>
                </div>


            </div>
        </div>
    )
}

export default withSanctum(Home)