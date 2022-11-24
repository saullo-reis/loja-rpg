import { Route, Routes } from "react-router-dom";
import { Main } from "../main"
import { Car } from "../car"

const AppRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/produtos/carrinho" element={<Car/>}/>
        </Routes>
    )
}

export { AppRoutes }