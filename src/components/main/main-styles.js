import styled from "styled-components"

export const MainStyles = styled.section`
  padding: 0 120px;
  font-family:'Texto', sans-serif;
  background-color: #000;
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:wrap row;
    padding:50px;
  }
  li{
    width:250px;
    height:300px;
    list-style:none;
    opacity: 0;
    background-color:#777;
    color:black;
    margin:0 20px 20px 0;
    display:flex;
    padding:20px;
    border-radius:8px;
    flex-direction:column;
    text-align:center;
    align-items:center;
    justify-content:center;
    transition:1s;
    padding:20px;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.6);
    animation: slide 1s forwards ease;
  }
  img{
    width:200px;
    height:150px;
    margin: 20px;
  }
  button{
    border:none;
    border-radius:5px;
    margin-top:10px;
    padding:10px;
    font-weight:bold;
    color:white;
    background-color:#DAA520;
    cursor:pointer;
    transition:1s;
  }
  button:hover{
    background-color:red;
  }

  @keyframes slide{
    0%{
      opacity: 0;
      transform: translateY(200px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
`