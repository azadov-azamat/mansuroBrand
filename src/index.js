import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";


const app = (
    <>
        <ToastContainer/>
        <BrowserRouter><App/></BrowserRouter>
    </>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
