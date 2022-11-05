import React from "react";
import styled from "styled-components";
import { Page, Title } from "./UniversalStyle";
import NavBar from "./NavBar";

import MissingTexture from "../images/missingTexture.png"

const HeaderContainer = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(${props => props.background || MissingTexture});
  background-repeat: no-repeat;
  background-size: cover;
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
        <HeaderContainer background={props.background}>
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