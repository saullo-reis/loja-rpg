import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Car = ({parentToChild}) =>{
    const arrayCar = parentToChild
    const [soma , setSoma] = useState(0)
    useEffect(() =>{
      arrayCar.map((element, n) => {
        let valor = arrayCar[n].price
        setSoma(valor + soma )
      })
    },arrayCar.length)
    console.log(soma)
    console.log(arrayCar)
    return(
        <Section>
            <ul>
                {
                    arrayCar.length == 0 ? <h1>Nenhum item adicionado ao carrinho</h1> :
                    arrayCar.map((element, index) => {
                    return(
                        <li key={index}>
                            <h2>{element.nome}</h2>
                            <img src={require(`${element.image}`)} alt="imagem" />
                            <h2>Preço: {element.price}</h2>
                            <p>{element.desc}</p>
                        </li>
                    )
                })

                }
            </ul>
            {
              arrayCar.length >= 1 ? <Link to={"/"}><button>Finalizar compra</button></Link> : null
            }
        </Section>
    )

}   

const Section = styled.section`
  padding:0 120px;
  font-family:'Texto', sans-serif;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:#2c2c2c;
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:wrap row;
    padding:50px;
  }
  h1{
    color:white;
  }
  button{
    margin-bottom:30px;
    width:100%;
    height:35px;
    font-weight:bold;
    border:none;
    border-radius:10px;
    transition:1s;
    cursor:pointer;
    padding:20px;
    display:flex;
    align-items:center;
    
  }
  a{
    text-decoration:none;
  }
  button:hover{
    color:white;
    background-color:red;
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
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.6);
  }
  img{
    width:200px;
    height:150px;
}
`