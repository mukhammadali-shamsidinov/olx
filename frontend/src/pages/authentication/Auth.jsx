import React from "react";
import Register from "./Register";
import './Auth.css'
import Login from "./Login";

export default function Auth(){
    return(
        <div className={'auth mt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 mt-5">
                        <Register />
                    </div>
                </div>
            </div>

        </div>
    )
}