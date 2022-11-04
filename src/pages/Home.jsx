import React from "react";
import styled from "styled-components";

import NavBar, { ULink } from "./NavBar";
import { SquareGrid, SquareDiv, SquareContent } from "./UniversalStyle";
import { FlatButton } from "./UniversalStyle";

import BackgroundImage from "../images/background.png";
import SteveHainesImage from "../images/SteveHaines.png";
import PersonIcon from "../images/icon1.png";
import DocumentIcon from "../images/icon2.png";
import NewsIcon from "../images/icon3.png";

const FullscreenBlock = styled.div `
  display: flex;
  justify-content: center;

  width: 100%;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PageBlock = styled.div `
  display: flex;
  justify-content: center;
`;

const Page = styled.div `
  width: 1250px;
  max-width: 90vw;
  color: white;
`;

const HeaderBlock = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding-bottom: 15px;
  padding-top: 15px;

  div {
    width: 80%;
    max-width: 600px;
    font-family: 'Source Sans Pro';
    color: rgb(191, 191, 191);
  }

  div h1 {
    font-family: 'Arial';
    color: white;
  }

  img {
    width: 360px;
    height: 600px;
  }
`;



function Square(props)
{
  return (
    <SquareDiv>
      <ULink to="/">
        <SquareContent>
          {props.children}
        </SquareContent>
      </ULink>
    </SquareDiv>
  );
}

function Home() {

  return (
    <div>
      <FullscreenBlock >
        <Page>
          <NavBar></NavBar>
          <HeaderBlock>
            <div>
              <h1>Средство массовой <br/>информации</h1>
              <p>
                Средства массовой информации - информационный источник в определённом формате. 
                Они относятся к разнообразному шаблону медиа технологий, которые доносят информацию большому числу людей. 
                Организации которые используют медиа технологии средств информации, также известны как средства массовой информации. 
                У них имеется разноплановые функции составлять для людей сферу информации. 
                СМИ - важный аспект политической жизни. 
                Именно от прессы зависит, какое мнение сложится о политическом деятеле.              
              </p>
              <ULink to="/"><FlatButton>🖳 Наш форум</FlatButton></ULink>

              
            </div>
            <img alt="" src={SteveHainesImage}></img>
          </HeaderBlock>
        </Page>
      </FullscreenBlock>
      <PageBlock>
        <Page>
          <SquareGrid>
            <Square>
                <img alt="" src={PersonIcon}></img>
                <h3>Hello</h3>
                <p>Some Text</p>
            </Square>
            <Square>
              <img alt="" src={DocumentIcon}></img>
              <h3>Hello</h3>
              <p>Some Text</p>
            </Square>
            <Square>
              <img alt="" src={NewsIcon}></img>
              <h3>Hello</h3>
              <p>Some Text</p>
            </Square>
          </SquareGrid>
          <SquareGrid>
            <Square>
              <img alt="" src={NewsIcon}></img>
              <h3>Hello</h3>
              <p>Some Text</p>
            </Square>
            <Square>
              <img alt="" src={NewsIcon}></img>
              <h3>Hello</h3>
              <p>Some Text</p>
            </Square>
          </SquareGrid>
        </Page>
      </PageBlock>
    </div>
  );
}

export default Home;