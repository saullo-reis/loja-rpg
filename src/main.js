import { Section } from "./main-styles";
import { useState } from "react";
import productsJson from "./itens.json"


export const Main = ({childToParent}) => {
    const[item] = useState(productsJson.data)
    const[itemsCarrinho, setItemsCarrinho] = useState([])
    function adicionarCarrinho(element){
      const arrayItems = []
      arrayItems.push(element)
      setItemsCarrinho([...arrayItems, ...itemsCarrinho])
    }

    childToParent(itemsCarrinho)
    return(
        <Section>
        <ul>{
          item.map((element, index) =>{
            return(
              <li key={index}>
                <h2>{element.nome}</h2>
                <img src={require(`${element.image}`)} alt="imagem" />
                <h2>Preço: {element.price} gold</h2>
                <p>{element.desc}</p>
                <button onClick={() => adicionarCarrinho(element)}>Adicionar no carrinho</button>
              </li>
            )
          })  
        }</ul>
      </Section>
    )
}

