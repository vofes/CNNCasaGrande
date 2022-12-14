import React, { useState } from "react";

import Header from "./Header";
import { PageContainer, Page } from "./UniversalStyle";
import BackgroundImage from "../images/background5.jpg";

import { Title } from "./UniversalStyle";
import { 
  MiniNavBar, SelectRuleButton, 
  Rule, RuleNumber, RuleText, RulesContent,
  Quote, Spoiler, SpoilerButton, SpoilerContainer, RuleImg 
} from "./RulesStyle";

import PROJson from "./RulesCNN/PRO.json";
import PPGJson from "./RulesCNN/PPG.json";
import PPEJson from "./RulesCNN/PPE.json";
import PPAJson from "./RulesCNN/PPA.json";
import EYJson from "./RulesCNN/EY.json";
import OtherJson from "./RulesCNN/Other.json";

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

function IsString(obj)
{
  return typeof obj === 'string' || obj instanceof String;
}

function IsArray(obj)
{
  return Array.isArray(obj);
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
              if(IsString(text) === true)
                return(<div key={'string' + index}>{text}</div>);
              else
                return(ParseImage(text.image));
            })
          }
          </Spoiler>
        }
      </SpoilerContainer>
    </Rule>
  );
}

const ruleImages = require.context("../images/rulesImages", true);

function LoadImage(path)
{
  if(path.includes("https://") === true)
  {
    return path;
  }
  return ruleImages(`./${path}`);
}

function ParseImage(imgJSONObj)
{
  return <RuleImg
    key={imgJSONObj.path}
    src={LoadImage(imgJSONObj.path)} 
    style={{
      width: imgJSONObj.width ? imgJSONObj.width : "", 
      height: imgJSONObj.height ? imgJSONObj.height : ""
    }}
  />
}

function ParseText(jsonTextObj)
{
  if(IsString(jsonTextObj) === true)
  {
    return <RuleText>{jsonTextObj}</RuleText>;
  }
  
  if(IsArray(jsonTextObj) === true)
  {
    return jsonTextObj.map( (line, index) => { 
      return <RuleText key={index}>{line + '\n'}</RuleText>
    });
  }

  return null;
}

function ParseJSON(json)
{
  return (
    <div>
      {
        json.map( (section, index) => {
          return (
            <div key={section.chapter + "" + index}>
              <Title style={{marginBottom: "5px"}}> 
                { section.chapter + " " + section.desc} 
              </Title>
              {
                section.content.map( (rule, index) => {
                  return (
                    <Rule key={index}>
    
                      <RuleNumber>
                        {rule.number + " "}
                        {ParseText(rule.text)}
                        
                      </RuleNumber>
                      
                      { rule.quote ? ParseQuote(rule.quote) : null }
                      { rule.spoiler ? (<ParseSpoiler title={rule.spoiler.title} content={rule.spoiler.content}></ParseSpoiler>) : null }
                      { rule.image ? ParseImage(rule.image) : null }
                      
    
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
RuleMap.set("??????", ParseJSON(PROJson));
RuleMap.set("??????", ParseJSON(PPEJson));
RuleMap.set("??????", ParseJSON(PPAJson));
RuleMap.set("??????", ParseJSON(PPGJson));
RuleMap.set("????", ParseJSON(EYJson));
RuleMap.set("????????????", ParseJSON(OtherJson));

function RulesCNN() 
{
  const [selectedSection, SelectSection] = React.useState(document.cookie || "??????"); // AAAAA

  function SelectSectionCookie(section)
  {
    SelectSection(section);
    // BAD, VERY BAD.
    document.cookie = section;
  }

  return (
    <div>
      <Header background={BackgroundImage} title={"?????????????? ??????"}></Header>
      <PageContainer>
        <Page>
          <MiniNavBar>
            <SelectRuleButton section={"??????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ???????????????????????????? ????????????????????
            </SelectRuleButton>
            <SelectRuleButton section={"??????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ????????????
            </SelectRuleButton>
            <SelectRuleButton section={"??????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ??????????-????????????
            </SelectRuleButton>
            <SelectRuleButton section={"??????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ?????????????? ?? ???????????? ??????????
            </SelectRuleButton>
            <SelectRuleButton section={"????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ???????????? ??????????
            </SelectRuleButton>
            <SelectRuleButton section={"????????????"} onClick={SelectSectionCookie} selectedSection={selectedSection}>
              ????????????
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