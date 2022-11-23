import { useState, useEffect } from "react";
import productsJson from "./itens.json"
import { Header } from "./components/header";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css"
import background from "./assets/img/thumb-1920-1164041.png"
import background2 from "./assets/img/ewe.jpg"
import { Footer } from "./components/footer";


function App() {
  const[item] = useState(productsJson.data)

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <SectionDivision>
        <h2>Melhor loja para comprar seus equipamentos </h2>
      </SectionDivision>
      <Section>
        <ul>{
          item.map((element, index) =>{
            return(
              <li key={index}>
                <h2>{element.nome}</h2>
                <img src={require(`${element.image}`)} alt="imagem" />
                <h2>Preço: {element.price}</h2>
                <p>{element.desc}</p>
                <button>Adicionar no carrinho</button>
              </li>
            )
          })  
        }</ul>

      </Section>
      <SectionDivision2>
        <h2>Os melhores ferreiros da região</h2>
      </SectionDivision2>
      <Footer/>
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
  align-items:center;
  justify-content:center;
  font-family:'Texto', sans-serif;
  h2{
    font-size:50px;
  }

`
const SectionDivision2 = styled.section`
background: url(${background2});
height:500px;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-family:'Texto', sans-serif;
h2{
  font-size:50px;
}

`


const Section = styled.section`
  padding:0 120px;
  font-family:'Texto', sans-serif;
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:wrap row;
    background-color:#2c2c2c;
    padding:50px;
  }
  li{
    width:250px;
    height:300px;
    list-style:none;
    background-color:black;
    color:white;
    margin:0 20px 20px 0;
    display:flex;
    padding:20px;
    border-radius:20px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    transition:1s;
  }
  li:hover{
    transform:scale(1.1, 1.1)
  }
  img{
    width:200px;
    height:150px;

  }
`
export default App;
