import React from "react"
import styled from "styled-components"
import carrinho from "../../assets/icon/carrinho-de-compras.png"
import { Link } from "react-router-dom"

export const Header = ({ parentToChild }) => {
    return (
        <HeaderStyle>
            <Link to={"/"}>
                <h1>Loja RPG</h1>
            </Link>
            <Link to={"/produtos/carrinho"}>
                <img src={carrinho}></img>
                {parentToChild.length > 0 ? <span>{parentToChild.length}</span> : null}
            </Link>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.section`
    width:100%;
    height:180px;
    color:white;
    font-family:'JicamaDays', sans-serif;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        margin-left:20px;
        font-size:100px;
    }
    span{
        position:absolute;
        display:flex;
        width:16px;
        top: 35px;
        right: 13px;
        background-color:red;
        border-radius:100%;
        padding:5px;
        align-items: center;
        justify-content: center;
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
        position: relative;
        text-decoration:none;
    }
    img:hover{
        transform:scale(1.2, 1.2);
    }
    @media(max-width: 460px){
        h1{
            font-size:60px;
        }
    }
    
`


