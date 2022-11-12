import React from "react";
import styled from "styled-components";
import { grayColor, lightGrayColor, orangeColor } from "./UniversalStyle";

const TransperentButton = styled.button `
    background-color: transparent;
    border: 0;
    font-family: 'Source Sans Pro';
    font-size: 1.25rem;
    color: white;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonContainer = styled.div `
  margin-top: 25px;
  padding: 0px 25px;
  border-bottom: 2px solid;
  border-color: gray;

  transition: border-color 0.5s;



  &:hover {
    border-color: #bfbfbf;
  }
  
  ${TransperentButton} {
  }
`;

export function SelectRuleButton(props)
{
  var style = props.selectedSection === props.section ? { borderColor: "white" } : null;

  return(
    <ButtonContainer style={style}>
      <TransperentButton onClick={() => props.onClick(props.section)}>
        {props.children}
        <p>{props.section}</p>
      </TransperentButton>
    </ButtonContainer>
  );
}

export const MiniNavBar = styled.nav `

  p {
    margin: 0;
    color: gray;
    font-size: 1rem;
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Rule = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin: 5px;
    }
`;

export const RulesContent = styled.div `
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
`;

export const RuleNumber = styled.p `
  color: ${orangeColor};
`;

export const RuleText = styled.span `
  color: ${lightGrayColor};
`;

export const RuleImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Quote = styled.div `
  background-color: ${grayColor};
  margin: 10px 0px;
  padding: 15px 0px;
  border-left: 4px solid;
  border-color: ${orangeColor};
  width: 75%;
`;

export const SpoilerButton = styled.button `
  margin-top: 15px;
  padding: 5px 15px;
  background-color: ${grayColor};
  border-radius: 5px;
  border: ${props => props.active === true ? "4px solid" : "0"};
  border-color: ${lightGrayColor};
  font-family: 'Source Sans Pro';
  font-size: 1.25rem;
  color: white;
  cursor: pointer;

  ::before {
      content: "Спойлер: ";
  }

  ::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
  }
`;

export const SpoilerContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: max-height 0.26s ease;
  overflow: hidden;
  max-height: ${props => props.showDropdown === true ? "1000vh" : "0"};
`;

export const Spoiler = styled.div `
  background-color: ${grayColor};
  margin: 10px 0px;
  padding: 15px 15px;
  border-left: 4px solid;
  border-color: white;
  min-width: 75%;
  
  div {
    line-height: 30px;
  }

  h2 {
      margin: 0;
  }
`;