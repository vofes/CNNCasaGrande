import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ULink } from "./UniversalStyle";

import LogoImage from "../images/logo.svg";
import MenuImage from "../images/menuIcon.png"

const NavContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  li {
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: 'Source Sans Pro';
    font-size: 1.5rem;
  }
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

  text-align: center;
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

const Logo = styled.div `
  margin-right: 45px;

  img {
    width: 100px;
    height: 50px;
  }
`;

const MenuButton = styled.button `
  display: ${props => props.show ? "block" : "none"};
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
`;

function Links()
{  
  return [
      <li><HighlightLink to="/">Главная</HighlightLink></li>,
      <li><HighlightLink to="/news">Новости</HighlightLink></li>,
      <li><HighlightLink to="/rulesCNN">Правила СМИ</HighlightLink></li>,
      <li><HighlightLink to="https://forum.arizona-rp.com/threads/4774981/">Онлайн тесты</HighlightLink></li>,
      <li><HighlightLink to="/management">Руководство</HighlightLink></li>,
      <li><HighlightLink to="https://forum.arizona-rp.com/forums/1804/">Форум</HighlightLink></li>
  ];
}

const Bar = styled.ul `
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Menu = styled.ul `
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style-type: none;
`;

function NavBar()
{
  const [menuShowed, OpenMenu] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function HandleResize() 
    {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', HandleResize);
    return () => window.removeEventListener('resize', HandleResize);
  }, []);

  const minBarWidth = 1170;

  return (
    <NavContainer>
      <Nav>
        <ULink to="/"><Logo><img alt="" src={LogoImage}></img></Logo></ULink>
        <Bar style={{ display: windowWidth >= minBarWidth ? "flex" : "none" }}><Links/></Bar>
        <MenuButton show={windowWidth < minBarWidth} onClick={() => OpenMenu(!menuShowed)}><img src={MenuImage}/></MenuButton>
      </Nav>
      <Menu style={{ display: menuShowed && windowWidth < minBarWidth ? "flex" : "none" }}><Links/></Menu>
    </NavContainer>
  );
}

export default NavBar;