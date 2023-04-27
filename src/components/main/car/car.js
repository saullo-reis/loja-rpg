import { Section } from "./car-styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export const Car = ({ parentToChild }) => {
  const [arrayItems, setArrayItems] = useState(parentToChild)
  const [soma, setSoma] = useState(0)

  const handleClick = (index) => {
    const newArrayItems = [...arrayItems.slice(0, index), ...arrayItems.slice(index + 1)];
    setArrayItems(newArrayItems);
  };

  useEffect(() => {
    setSoma(arrayItems.reduce((total, currentNumber) => total + currentNumber.price, 0))
  },[arrayItems, arrayItems.length])

  return (
    <Section>
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
                <p>{element.desc}</p>
              </li>
            )
          )
        )}
      </ul>
      <h2>Preço total da compra: {soma} Golds</h2>
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
    </Section>
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