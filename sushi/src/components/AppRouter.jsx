import React from 'react';
import {Route, Routes} from "react-router-dom"
import App from "../App";
import Product from '../pages/Product'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route exact path='/category/product' element={<Product/>}/>
        </Routes>
    );
};

export default AppRouter;