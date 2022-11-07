import React from "react";
import styled from "styled-components";

import { ULink, FlatButton } from "./UniversalStyle";
import Header from "./Header";
import { PageContainer, Page } from "./UniversalStyle";
import { SquareGrid, SquareButton } from "./UniversalStyle";

import BackgroundImage from "../images/background2.jpg";
import SteveHainesImage from "../images/SteveHaines.png";
import PersonIcon from "../images/icon1.png";

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 600px;
  font-family: 'Source Sans Pro';
  color: rgb(191, 191, 191);

  h1 {
    color: white;
    margin: 0;
  }
`;

const InfoBlockContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Home() 
{
  return (
    <div>
      <Header background={BackgroundImage} title={null}>
        <InfoBlockContainer>
          <InfoBlock>
            <h1>Средство массовой <br/>информации</h1>
            <p>
              Средства массовой информации - информационный источник в определённом формате. 
              Они относятся к разнообразному шаблону медиа технологий, которые доносят информацию большому числу людей. 
              Организации которые используют медиа технологии средств информации, также известны как средства массовой информации. 
              У них имеется разноплановые функции составлять для людей сферу информации. 
              СМИ - важный аспект политической жизни. 
              Именно от прессы зависит, какое мнение сложится о политическом деятеле.              
            </p>
            <ULink to="https://forum.arizona-rp.com/forums/1804/"><FlatButton>🖳 Наш форум</FlatButton></ULink>
          </InfoBlock>
          <img alt="" src={SteveHainesImage}></img>
        </InfoBlockContainer>
      </Header>
      <PageContainer>
        <Page>
          <SquareGrid>
            <SquareButton to="/">
                <img alt="" src={PersonIcon}></img>
                <h3>Hello</h3>
                <p>Some Text</p>
            </SquareButton>
          </SquareGrid>
        </Page>
      </PageContainer>
    </div>
  );
}

export default Home;