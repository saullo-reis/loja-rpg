import styled from "styled-components"


export const Section = styled.section`
  padding:30px 120px;
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
    text-align: center;
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
    justify-content:center;
    margin-top:20px;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.6);
    
  }
  h2{
    color:white;
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