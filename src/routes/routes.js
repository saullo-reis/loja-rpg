import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components/main/main"
import { Car } from "../components/main/car/car"
import { useState } from "react";

const AppRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/produtos/carrinho" element={<Car/>}/>
        </Routes>
    )
}

export { AppRoutes }