import { CarStyles, Section } from "./car-styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { React } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../../../store/store";
import 'react-toastify/dist/ReactToastify.css';

export const Car = () => {
  const arrayItems = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const soma = arrayItems.reduce((total, currentNumber) => total + currentNumber.price, 0)

  const handleClick = (index) => {
    dispatch(removeItems(index))
    toast.success('Item removido do carrinho')
  };

  return (
    <CarStyles>
      <ul>
        {arrayItems.length === 0 ? (
          <h1>Nenhum item adicionado ao carrinho</h1>
        ) : (
          arrayItems.map((element, index) => (
              <li style={{position: 'relative'}} key={index}>
                <Scrap onClick={() => handleClick(index)}>X</Scrap>
                <h2>{element.nome}</h2>
                <img src={`${element.image}`} alt="imagem" />
                <h2>Preço: {element.price}</h2>
                <p style={{ textAlign: 'center' }}>{element.desc}</p>
              </li>
            )
          )
        )}
      </ul>
      <h2 >Preço total da compra: {soma} Golds</h2>
      {arrayItems.length >= 1 ? (
        <Link to={"/"}>
          <button
            onClick={() => {
              window.alert("Compra Finalizada");
            }}
          >
            Finalizar compra
          </button>
        </Link>
      ) : null}
    <ToastContainer position="bottom-left" />
    </CarStyles>
    
  );
};

const Scrap = styled.span`
  cursor: pointer;
  background-color: red;
  padding: 10px;
  position: absolute;
  right: -5px;
  top: -5px;
  border-radius: 100%;
  font-size: 20px;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

`