import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.sass';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Item from "./pages/Product";

ReactDOM.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>,
    document.getElementById('root')
);


