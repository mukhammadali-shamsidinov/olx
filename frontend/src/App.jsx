import React, {createContext, useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import IconSearch from "./components/IconSearch";
import Card from "./components/Card";
import Detail from "./pages/detail/Detail";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/homepage/Home";
import Elon from "./pages/Elon/Elon.jsx";
import axios from "axios";
export const MyContext = createContext()
function App(){
    const [elon,setElon] = useState([])
    const [detailItem,setDetail] = useState(null)
        const navigate = useNavigate()
        const detail = (item)=>{
        navigate('/detail')
            console.log(item)
            setDetail((item))
    }
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/v1/elon/all/').then(res=>{
            console.log(res.data)
            setElon(res.data.data)
        })
    },[])
    return(
        <MyContext.Provider value={{elon,detail,detailItem}}>
            <div className={'container-fluid'}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/detail/*" element={<Detail />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/elon" element={<Elon/>}/>
                </Routes>
            </div>
        </MyContext.Provider>
    )
}

export default App