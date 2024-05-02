import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MyContext} from "../App.jsx";

export default function Card(){
const {detail} = useContext(MyContext)


    const {elon} = useContext(MyContext)
    return <div className={'text-light p-3'} style={{background:"whitesmoke"}}>
        <h1 className={'fs-3 text-center'}>Премиум объявления</h1>
        <div className="container">
            <div className="row g-3">
                {elon.length > 0 ? elon.map((item,idx)=> (
                    <div className="col-6 col-md-3" >
                        <div className={'text-decoration-none'} onClick={()=>detail(item)} >
                            <div className="custom-card bg-light text-dark rounded">
                                <div className="card-img">
                                    <img className={'img-thumbnail rounded'}
                                         src={`http://localhost:8000/${item.poster}`}
                                         alt=""/>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex p-3 justify-content-between">
                                        <p>{item.title}
                                            <br/>
                                            <span className={'text-primary fw-bold'}>{item.price}$</span>
                                            <small className={'small'}><br/>
                                                {item.adress} <br/>
                                                {new Date(item.created_time).toLocaleString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    timeZone: 'UTC' // Adjust timezone as needed
                                                })}
                                            </small>
                                        </p>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}

            </div>
        </div>
    </div>
}