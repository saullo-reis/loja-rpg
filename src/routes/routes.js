import { Route, Routes } from "react-router-dom";
import { Main } from "../components/main/main"
import { Car } from "../components/main/car/car"
import { useState } from "react";

const AppRoutes = ({childToParent2}) => {
    const [data, setData] = useState('');
    const childToParent = (childData) => {
      setData(childData)
    }

    childToParent2(data)
    return(
        <Routes>
            <Route exact path="/" element={<Main childToParent={childToParent}/>} />
            <Route exact path="/produtos/carrinho" element={<Car parentToChild={data}/>}/>
        </Routes>
    )
}

export { AppRoutes }