import styled from "styled-components"
import React from "react"

export const Footer = () => {
    return (
        <FooterStyle>
            <p>© Saullo Reis</p>
            <a href="https://www.linkedin.com/in/saullo-reis-874852231/"><p>Linkedin</p></a>
        </FooterStyle>
    )
}

const FooterStyle = styled.section`
    display:flex;
    height:30px;
    padding: 10px;
    color:gray;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    a{
        text-decoration:none;
        color:gray;
    }
`