import React, { useState } from "react";

import Header from "./Header";
import { PageContainer, Page } from "./UniversalStyle";
import BackgroundImage from "../images/background5.jpg";

import { Title } from "./UniversalStyle";
import { 
  MiniNavBar, SelectRuleButton, 
  Rule, RuleNumber, RuleText, RulesContent,
  Quote, Spoiler, SpoilerButton, SpoilerContainer 
} from "./RulesStyle";

import PROJson from "./RulesCNN/PRO.json";
import PPGJson from "./RulesCNN/PPG.json";
import PPEJson from "./RulesCNN/PPE.json";
import PPAJson from "./RulesCNN/PPA.json";
import EYMJson from "./RulesCNN/EYM.json";

function ParseQuote(quote)
{
  return (
    <Quote>
      {
        quote.map( (text, index) => {
          return(<div key={index}>{text}</div>);
        })
      }
    </Quote>
  );
}

function ParseSpoiler(props)
{
  const [isOpen, Open] = useState(false);

  function ToggleOpen()
  {
    Open(!isOpen);
  }

  return (
    <Rule>
      <SpoilerButton active={isOpen} onClick={() => ToggleOpen()}>{props.title}</SpoilerButton>
      <SpoilerContainer showDropdown={isOpen}>
        {
          <Spoiler>
          {
            props.content.map( (text, index) => {
              return(<div key={index}>{text}</div>);
            })
          }
          </Spoiler>
        }
      </SpoilerContainer>
    </Rule>
  );
}

function ParseJSON(json)
{
  return (
    <div>
      {
        json.map( (section) => {
          return (
            <div key={section.chapter}>
              <Title style={{marginBottom: "5px"}}> 
                { section.chapter + " " + section.desc} 
              </Title>
              {
                section.content.map( (rule, index) => {
                  return (
                    <Rule key={index}>
    
                      <RuleNumber>
                        {rule.number + " "}
                        <RuleText>{rule.text}</RuleText>
                      </RuleNumber>
                      
                      { rule.quote ? ParseQuote(rule.quote) : null }
                      { rule.spoiler ? (<ParseSpoiler title={rule.spoiler.title} content={rule.spoiler.content}></ParseSpoiler>) : null }
    
                    </Rule>
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

var RuleMap = new Map();
RuleMap.set("ПРО", ParseJSON(PROJson));
RuleMap.set("ППЭ", ParseJSON(PPGJson));
RuleMap.set("ППА", ParseJSON(PPEJson));
RuleMap.set("ППГ", ParseJSON(PPAJson));
RuleMap.set("ЕУМ", ParseJSON(EYMJson));

function RulesCNN() 
{
  const [selectedSection, SelectSection] = React.useState("ПРО");

  return (
    <div>
      <Header background={BackgroundImage} title={"Правила СМИ"}></Header>
      <PageContainer>
        <Page>
          <MiniNavBar>
            <SelectRuleButton section={"ПРО"} onClick={SelectSection} selectedSection={selectedSection}>
              Редактирование объявления
            </SelectRuleButton>
            <SelectRuleButton section={"ППЭ"} onClick={SelectSection} selectedSection={selectedSection}>
              Эфиров
            </SelectRuleButton>
            <SelectRuleButton section={"ППА"} onClick={SelectSection} selectedSection={selectedSection}>
              Аудио-Эфиров
            </SelectRuleButton>
            <SelectRuleButton section={"ППГ"} onClick={SelectSection} selectedSection={selectedSection}>
              Продажа и печать газет
            </SelectRuleButton>
            <SelectRuleButton section={"ЕУМ"} onClick={SelectSection} selectedSection={selectedSection}>
              Устав медиакорпорации
            </SelectRuleButton>
          </MiniNavBar>
          <RulesContent>

              { RuleMap.get(selectedSection) }

          </RulesContent>
        </Page>
      </PageContainer>
    </div>
  );
}

export default RulesCNN;