import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ULink } from "./UniversalStyle";

import LogoImage from "../images/logo.png";

const NavContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.nav `
    width: 1250px;
    max-width: 85vw;

    padding: 15px;
    padding-top: 25px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  ul li {
    
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: 'Source Sans Pro';
    font-size: 1.5rem;
    text-align: center;
  }
`;



export const HighlightLink = (props) => {
    const path = props.to || "/404";
    var hightLight = useLocation().pathname === path;
    if("/" + useLocation().pathname.split("/")[1] === path)
        hightLight = true;

    const linkStyle = 
    {
        textDecoration: "none",
        color: hightLight === true ? "orange" : "white",
        borderColor: "orange",
        borderBottom: hightLight === true ? "2px solid" : "0",
        padding: "5px",
        paddingRight: "15px",
        paddingLeft: "15px"
    }
    return (
        <ULink to={props.to} style={linkStyle}>
            {props.children}
        </ULink>
    );
}

const Logo = styled.a `
  margin-right: 45px;

  img {
    width: 100px;
    height: 50px;
  }
`;

function NavBar()
{
    return (
    <NavContainer>
      <Nav>
        <ULink to="/"><Logo><img alt="" src={LogoImage}></img></Logo></ULink>
        <ul>
            <li><HighlightLink to="/">Главная</HighlightLink></li>
            <li><HighlightLink to="/news">Новости</HighlightLink></li>
            <li><HighlightLink to="/rulesCNN">Правила СМИ</HighlightLink></li>
            <li><HighlightLink to="https://forum.arizona-rp.com/threads/4774981/">Онлайн тесты</HighlightLink></li>
            <li><HighlightLink to="/management">Руководство</HighlightLink></li>
            <li><HighlightLink >Прочее</HighlightLink></li>
        </ul>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;

// ----------