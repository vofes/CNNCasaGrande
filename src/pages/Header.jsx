import React from "react";
import styled from "styled-components";
import { darkGrayColor, Page, Title } from "./UniversalStyle";
import NavBar from "./NavBar";

import MissingTexture from "../images/missingTexture.png"

const HeaderContainer = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  /* background-color: ${darkGrayColor};
  background-image: url(${props => props.background || MissingTexture});
  background-repeat: no-repeat;
  background-size: cover; */
`;

const Background = styled.img `
  object-fit: cover;
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const HeaderBlock = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding-bottom: 15px;
    padding-top: 15px;
`;

function Header(props)
{
    return(
      <HeaderContainer>
        <Background src={ props.background || MissingTexture }></Background>
        <Page>
          <NavBar></NavBar>
          <HeaderBlock>
            {props.title ? (<Title>{props.title}</Title>) : null}
            {props.children}
          </HeaderBlock>
        </Page>
      </HeaderContainer>
    );
}

export default Header;