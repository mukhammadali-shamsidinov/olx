import React from "react";
import './Search.css'
export default function Search(props){
    return <div className={'search-container'}>
        <br/>
        <form action="" className={'form-group'}>
            <div className="form-custom w-60">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" className="form-custom-control radius" placeholder={'Search'}/>

            </div>
            <div className="form-custom w-20">

                <i className="fa-solid fa-location-dot"></i>
                <select name="" id="" className={'form-select'} style={{border:'none',backgroundColor:'transparent'}}>
                    <option value="tashkent">Tashkent</option>
                    <option value="tashkent">Bukhara</option>
                    <option value="tashkent">Andijon</option>
                </select>
            </div>
            <button className="btn btn-dark w-20" style={{background: '#002F34',borderRadius:'0px'}}>Qidirish</button>
        </form>
    </div>
}