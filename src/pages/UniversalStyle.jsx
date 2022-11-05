import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const orangeColor = "#ff8800";
export const darkOrangeColor = "#ca6c00";
export const lightGrayColor = "rgb(191, 191, 191)";
export const darkGrayColor = "rgb(34, 36, 43)";
export const grayColor = "#333641";


// Link

export function ULink(props)
{
    const path = props.to || "/404";
    var linkStyle = 
    {
      textDecoration: "none",
      color: "white"
    };

    if(props.style != null)
        linkStyle = props.style;

    if(path.includes("https://") === true) 
    {
      return (
        <a href={path} style={linkStyle}>
          {props.children}
        </a>
      );
    }
  
    return (
      <NavLink to={path} style={linkStyle}>
        {props.children}
      </NavLink>
    );
};

// Buttons

export const FlatButton = styled.button `
  padding: 10px 50px;
  border-radius: 100px;
  border: 0px solid;
  cursor: pointer;

  color: white;
  font-family: 'Source Sans Pro';
  font-size: 24px;

  background-color: ${orangeColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${darkOrangeColor};
  }
`;

export const SquareGrid = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SquareDiv = styled.div `
  width: 250px;
  height: 250px;
  background-color: ${grayColor};
  margin: 10px 25px;
  border: 3px solid;
  border-color: ${darkGrayColor};
  transition: border-color 0.25s ease-out;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border-color: ${orangeColor};
    transition: border-color 0.25s ease-in;
  }
`;

const SquareContent = styled.div `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  img {
    width: 35%;
    height: 35%;
    margin: 25px;
  }

  h3 {
    margin: 0;
    margin-bottom: 15px;
    font-family: 'Arial';
    color: white;
  }

  p {
    margin: 0;
    font-family: 'Source Sans Pro';
    color: ${lightGrayColor}
  }
`;

export function SquareButton(props)
{
  return (
    <SquareDiv>
      <ULink to={props.to}>
        <SquareContent>
          {props.children}
        </SquareContent>
      </ULink>
    </SquareDiv>
  );
}

// Page

export const PageContainer = styled.div `
    display: flex;
    justify-content: center;
`;

export const Page = styled.div `
    width: 1250px;
    max-width: 90vw;
    color: white;
`;

export const Title = styled.h1 `
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: 'Arial';
    margin: 35px;
`;

export const Line = styled.div `
    margin: 15px 0px;
    width: 100%;
    border-bottom: 2px solid;
    border-color: ${lightGrayColor};
`;