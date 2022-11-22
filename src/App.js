import { useState, useEffect } from "react";
import productsJson from "./itens.json"
import { Header } from "./components/header";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css"
import background from "./assets/img/1164046.png"


function App() {
  const[item] = useState(productsJson.data)

  return (
    <>
      <GlobalStyle/>
      <Header/>
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
const Section = styled.section`
  padding:120px;
  background: url(${background});
  font-family:'Texto', sans-serif;
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:wrap row;
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
