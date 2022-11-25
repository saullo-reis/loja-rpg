import styled from "styled-components"
import carrinho from "../assets/icon/carrinho-de-compras.png"
import { Link } from "react-router-dom"

export const Header = ({parentToChild}) =>{
    return(
        <Section>
            <Link to={"/"}>
                <h1>Loja RPG</h1>
            </Link> 
            <Link to={"/produtos/carrinho"}>
                <img src={carrinho}></img>
                {
                    parentToChild.length > 0 ? <span>{parentToChild.length}</span> : null
                }
            </Link>
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
    span{
        position:relative;
        right:40px;
        width:26px;
        background-color:red;
        border-radius:100px;
        padding:5px;
        color:white;
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
    a{
        text-decoration:none;
    }
    img:hover{
        transform:scale(1.2, 1.2);
    }
    
`


