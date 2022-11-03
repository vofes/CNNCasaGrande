import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import background from '../images/navigationBackground.png';

export const Link = (props) => { // to, innerHTML, hightLight
    const path = props.to;
    const innerHTML = props.innerHTML;
    const hightLight = useLocation().pathname === path;
    
    const linkStyle = 
    {
      textDecoration: "none",
      color: hightLight === true ? "orange" : "white",
      paddingRight: "15px",
      paddingLeft: "15px",
      fontSize: "1.25rem",
      fontFamily: 'Impact'
    };
  
    if(path.includes("https://") === true) 
    {
      return (
        <a href={path} style={linkStyle}>
          {innerHTML}
        </a>
      );
    }
  
    return (
      <NavLink to={path} style={linkStyle}>
        {innerHTML}
      </NavLink>
    );
};

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div `
    background-image: url(${background});
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
    }
`;

export const HamburgerContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  align-items: center;
  a {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const InvisibleButton = styled.button `
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`;