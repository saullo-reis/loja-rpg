import React from "react"
import styled from "styled-components"
import carrinho from "../../assets/icon/carrinho-de-compras.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const Header = () => {
    const itemsLength = useSelector((state) => state.items.length)

    return (
        <HeaderStyle>
            <Link to={"/"}>
                <h1>Loja RPG</h1>
            </Link>
            <Link to={"/produtos/carrinho"}>
                <img src={carrinho}></img>
                {itemsLength !== 0 && <span>{itemsLength}</span>}
            </Link>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.section`
    width:100%;
    height:100px;
    color:white;
    font-family:'JicamaDays', sans-serif;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        margin-left:20px;
        font-size:100px;
        color: white;
    }
    span{
        position:absolute;
        display:flex;
        width:16px;
        bottom: 0;
        right:15px;
        background-color:red;
        border-radius:100%;
        padding:5px;
        align-items: center;
        justify-content: center;
        color:white;
        animation: pulsing 1s ease infinite;
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
    }
    img:hover{
        transform:scale(1.2, 1.2);
    }
    @media(max-width: 460px){
        h1{
            font-size:60px;
        }
    }
    

    @keyframes pulsing{
        0%{
            transform:scale(0.7);
        }
        50%{
            transform:scale(1);
        }
        100%{
            transform:scale(0.7);
        }

    }
`


