import styled from "styled-components"
import { useState, useEffect } from "react";
import productsJson from "./itens.json"


export const Main = () => {
    const[item] = useState(productsJson.data)
    const[itemsCarrinho, setItemsCarrinho] = useState([])
    function adicionarCarrinho(element){
      const arrayItems = []
      arrayItems.push(element)
      setItemsCarrinho([...arrayItems, ...itemsCarrinho])
    }
    console.log(itemsCarrinho)
    return(
        <Section>
        <ul>{
          item.map((element, index) =>{
            return(
              <li key={index}>
                <h2>{element.nome}</h2>
                <img src={require(`${element.image}`)} alt="imagem" />
                <h2>Preço: {element.price}</h2>
                <p>{element.desc}</p>
                <button onClick={() => adicionarCarrinho(element)} >Adicionar no carrinho</button>
              </li>
            )
          })  
        }</ul>
      </Section>
    )
}

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
    padding:20px;
  }
  img{
    width:200px;
    height:150px;
  }
  button{
    border:none;
    border-radius:5px;
    margin-top:10px;
    padding:10px;
    font-weight:bold;
    color:white;
    background-color:#DAA520;
    cursor:pointer;
    transition:1s;
  }
  button:hover{
    transform:scale(1.1, 1.1)
  }
`