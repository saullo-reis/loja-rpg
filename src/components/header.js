import styled from "styled-components"
import carrinho from "../assets/icon/carrinho-de-compras.png"

export const Header = () =>{
    return(
        <Section>
            <h1>Loja RPG</h1>
            <a href=""><img src={carrinho}></img></a>
        </Section>
    )
}

const Section = styled.section`
    width:100%;
    height:180px;
    color:white;
    font-family:'JicamaDays', sans-serif;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        font-size:100px;
        color:#ffffff;
        margin-left:20px;
    }
    img{
        width:40px;
        border:solid black 1px;
        padding:5px 5px 5px 3px;
        border-radius:100px;
        transition:0.5s;
        margin-right:20px;
        background-color:#DAA520;

    }
    img:hover{
        transform:scale(1.2, 1.2);
    }
    
`


