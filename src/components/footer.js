import styled from "styled-components"

export const Footer = () =>{
    return(
        <Section>
            <p>© Saullo Reis</p>
            <a href="https://www.linkedin.com/in/saullo-reis-874852231/"><p>Linkedin</p></a>
        </Section>
    )
}

const Section = styled.section`
    display:flex;
    height:150px;
    color:gray;
    align-items:center;
    justify-content:flex-end;
    flex-direction:column;
    a{
        text-decoration:none;
        color:gray
    }
`