import { MainStyles } from "./main-styles";
import { React } from 'react'
import { useState } from "react";
import productsJson from "./itens.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addItems } from "../../store/store";

export const Main = () => {
  const [item] = useState(productsJson.data)
  const dispatch = useDispatch()

  function adicionarCarrinho(element) {
    dispatch(addItems(element))
    toast.success(`Item ${element.nome} adicionado ao carrinho`)
  }
  
  return (
    <MainStyles>
      <ul>{
        item.map((element, index) => {
          return (
            <li key={index} style={{animationDelay: `${index*0.2}s`}}>
              <h2>{element.nome}</h2>
              <img src={`${element.image}`} alt="imagem" />
              <h2>Preço: {element.price} gold</h2>
              <p>{element.desc}</p>
              <button onClick={() => adicionarCarrinho(element)}>Adicionar ao carrinho</button>
            </li>
          )
        })
      }</ul>
      <ToastContainer position="bottom-left" />
    </MainStyles>
  )
}

