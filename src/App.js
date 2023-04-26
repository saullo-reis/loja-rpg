import { Header } from "./components/header/header";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css"
import background from "./assets/img/thumb-1920-1164041.png"
import background2 from "./assets/img/ewe.jpg"
import { Footer } from "./components/footer/footer";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState('');

  const childToParent2 = (childData) => {
    setData(childData)
  }
  
  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <Header parentToChild={data}/>
          <SectionDivision>
            <h2>Melhor loja para comprar seus equipamentos </h2>
          </SectionDivision>
          <AppRoutes childToParent2={childToParent2}/>
          <SectionDivision2>
            <h2>Os melhores ferreiros da região</h2>
          </SectionDivision2>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  body{
    margin:0;
    padding:0;
    height:100%;
    background-color:black;
  }
  html{
    height:100%;
  }
`
const SectionDivision = styled.section`
  background: url(${background});
  height:500px;
  color:white;
  display:flex;
  text-shadow: 1px 1px 5px black;
  align-items:center;
  justify-content:center;
  font-family:'Texto', sans-serif;
  padding:20px;
  h2{
    font-size:50px;
  }

`
const SectionDivision2 = styled.section`
background: url(${background2});
height:500px;
color:white;
display:flex;
text-shadow: 1px 1px 5px black;
align-items:center;
padding:20px;
justify-content:center;
font-family:'Texto', sans-serif;
h2{
  font-size:50px;
}
`
export default App;
