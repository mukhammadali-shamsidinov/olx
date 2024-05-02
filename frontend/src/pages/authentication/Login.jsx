import React from "react";
import './Auth.css'

export default function Login(){
    return(
        <div className={'register mt-5 mx-auto rounded d-flex align-items-center'}>
            <form action="" className={'w-75 mx-auto'}>
                <div className={'text-center'}>
                    <img src="/images/logo-removebg-preview.png" className={'w-75'} alt=""/>
                </div>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control rounded-0" id="email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control rounded-0" id="password"/>
                <a href="#">Forget Password ?</a><br/><br/>
                <div className="btn btn-dark w-100 rounded-0">Login</div>

            </form>
        </div>
    )
}