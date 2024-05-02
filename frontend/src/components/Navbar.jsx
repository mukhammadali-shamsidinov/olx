import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar(props){
    return <nav className={'custom-nav-container'}>
    <div className="custom-nav-logo">
<Link to={'/'}>
<img src="/images/logo-removebg-preview.png" alt="logo"/>
</Link>
    </div>
        <ul className="list-item">
            <li className="list-items">
                <a href="#" className="item-link">
                    <i className="fa-solid fa-message"></i>
                    <span>Xabarlar</span>
                </a>
            </li>
            <li className="list-items">
                <a href="#uz">Uz</a><a href="#ru">Ru</a>
            </li>
            <li className="list-items">
                <a href="#"><i className="fa-regular fa-heart"></i></a>
            </li>
            <li className="list-items">
                <a href="">
                    <i className="fa-regular fa-user"></i>
                    <span>Hisobingiz</span>
                </a>
            </li>
            <li className="list-items">
                <Link to="/elon" className="btn btn-outline-light">E'lon Berish</Link>
            </li>
        </ul>
    </nav>
}

export  default  Navbar