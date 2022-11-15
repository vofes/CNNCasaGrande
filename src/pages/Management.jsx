import React from "react";

import Header from "./Header";
import { PageContainer, Page } from "./UniversalStyle";
import { SquareGrid, SquareButton } from "./UniversalStyle";

import BackgroundImage from "../images/background2.jpg";
import PersonIcon from "../images/icon1.png";
import NewsIcon from "../images/icon3.png";

function Management() 
{
  return (
    <div>
      <Header background={BackgroundImage} title={"Руководство"}></Header>
      <PageContainer>
        <Page>
          <SquareGrid style={{marginTop: "15px"}}>
            <SquareButton to="https://vk.com/id167841825">
                <img alt="" src={PersonIcon}></img>
                <h3>Министр ИП</h3>
                <p>Управляющий: Robin_Sneyls</p>
            </SquareButton>
          </SquareGrid>
          <SquareGrid>
            <SquareButton to="https://vk.com/id691786897">
                <img alt="" src={NewsIcon}></img>
                <h3>Редакция "Weasel News"</h3>
                <p>Директор: Henry_Saints</p>
                <p>- LS -</p>
            </SquareButton>
            <SquareButton to="https://vk.com/id539120972">
                <img alt="" src={NewsIcon}></img>
                <h3>Редакция "LTA News"</h3>
                <p>Директор: Hideki_Sakurai​</p>
                <p>- LV -</p>
            </SquareButton>
            <SquareButton to="https://vk.com/id393497080">
                <img alt="" src={NewsIcon}></img>
                <h3>Редакция "Grande News"</h3>
                <p>Директор: Antonio_Maddy</p>
                <p>- SF -</p>
            </SquareButton>
          </SquareGrid>

        </Page>
      </PageContainer>
    </div>
  );
}

export default Management;