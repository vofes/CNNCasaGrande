import React from "react";
import styled from "styled-components";

export const Quote = styled.p `
  background-color: rgb(23, 24, 29);
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 2px solid red;
`

const Wrapper = styled.div `
    display: flex;
    
    max-width: 1000px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

const HeaderButton = styled.button `
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid gray;
    color: white;

    text-align: center;
    font-size: 16px;
    font-weight: bold;
`;

const DropdownBody = styled.div `
  overflow: hidden;
  width: 90%;
  max-height: ${props => props.showDropdown === true ? "10000px" : "0"};
  transform-origin: top;
  transition: max-height ${props => props.showDropdown === true ? "1s ease-in-out" : "0.5s cubic-bezier(0, 1, 0, 1);"};
  text-align: center;
  font-size: 16px;
  color: #e2e2e2;
  font-family: 'courier new';
  line-height: 16pt;
`;

const Symbol = styled.div`
  margin-left: 15px;
`;

const Heading = (props) => {
  return (
    <HeaderButton onClick={props.onClick}>
      {props.text}
      <Symbol>{props.symbol}</Symbol>
    </HeaderButton>
  );
};

export const Dropdown = (props) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  function ToggleDrowDown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <Wrapper>
      <Heading text={props.title} symbol={showDropdown ? "˄" : "˅"} onClick={ () => ToggleDrowDown() }/>
      <DropdownBody showDropdown={showDropdown}>
        {props.content}
      </DropdownBody>
    </Wrapper>
  );
};

export const Spoiler = (props) => {
  return (
    <Dropdown title={(<span STYLE="color: #c83637; font-weight: normal">Спойлер: {props.title}</span>)} content={(<Quote>{props.children}</Quote>)}/>
  );
};