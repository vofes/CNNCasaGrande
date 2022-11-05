import React from "react";
import styled from "styled-components";

import Header from "./Header";
import { PageContainer, Page } from "./UniversalStyle";

import BackgroundImage from "../images/background.png";

const TransperentButton = styled.button `
  background-color: transparent;
  border: 0;
  font-family: 'Source Sans Pro';
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
`;


function MiniLink(props)
{
  var style = props.selectedSection === props.section ? { borderColor: "white" } : null;

  return(
    <div className="miniLink" style={style}>
      <TransperentButton onClick={() => props.onClick(props.section)}>
        {props.children}
        <p>{props.section}</p>
      </TransperentButton>
    </div>
  );
}

const MiniNavBar = styled.nav `
  .miniLink {
    margin-top: 25px;
    padding: 0px 25px;
    border-bottom: 2px solid;
    border-color: gray;

    transition: border-color 0.5s;

    &:hover {
      border-color: #bfbfbf;
    }
    
    ${TransperentButton} {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

  }

  p {
    margin: 0;
    color: gray;
    font-size: 1rem;
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RulesContent = styled.div `
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

function RulesCNN() 
{
  const [selectedSection, SelectSection] = React.useState("ПРО");


  return (
    <div>
      <Header background={BackgroundImage} title={"Правила СМИ"}></Header>
      <PageContainer>
        <Page>
          <MiniNavBar>
            <MiniLink section={"ПРО"} onClick={SelectSection} selectedSection={selectedSection}>
              Редактирование объявления
            </MiniLink>
            <MiniLink section={"ППЭ"} onClick={SelectSection} selectedSection={selectedSection}>
              Эфиров
            </MiniLink>
            <MiniLink section={"ППА"} onClick={SelectSection} selectedSection={selectedSection}>
              Аудио-Эфиров
            </MiniLink>
            <MiniLink section={"ППГ"} onClick={SelectSection} selectedSection={selectedSection}>
              Продажа и печать газет
            </MiniLink>
            <MiniLink section={"ЕУМ"} onClick={SelectSection} selectedSection={selectedSection}>
              Устав медиакорпорации
            </MiniLink>
          </MiniNavBar>
          <RulesContent>
            {selectedSection}
          </RulesContent>
        </Page>
      </PageContainer>
    </div>
  );
}

export default RulesCNN;