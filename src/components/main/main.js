import { Section } from "./main-styles";
import { useState } from "react";
import productsJson from "./itens.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Main = ({childToParent}) => {
    const[item] = useState(productsJson.data)
    const[itemsCarrinho, setItemsCarrinho] = useState([])
    function adicionarCarrinho(element){
      const arrayItems = []
      arrayItems.push(element)
      setItemsCarrinho([...arrayItems, ...itemsCarrinho])
      toast.success(`Item ${element.nome} adicionado ao carrinho` )
    }

    childToParent(itemsCarrinho)
    return(
        <Section>
        <ul>{
          item.map((element, index) =>{
            return(
              <li key={index}>
                <h2>{element.nome}</h2>
                <img src={`${element.image}`} alt="imagem" />
                <h2>Preço: {element.price} gold</h2>
                <p>{element.desc}</p>
                <button onClick={() => adicionarCarrinho(element)}>Adicionar ao carrinho</button>
              </li>
            )
          })  
        }</ul>
        <ToastContainer position="bottom-left"/>
      </Section>
    )
}

