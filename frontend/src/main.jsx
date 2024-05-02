import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
ReactDOM.render(
    <BrowserRouter>
   <App />
        
    </BrowserRouter>
    ,
  document.getElementById('root')
);
