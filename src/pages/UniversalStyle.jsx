import styled from "styled-components";

export const SquareGrid = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SquareDiv = styled.div `
  width: 250px;
  height: 250px;
  background-color: #333641;
  margin: 25px;
  border: 3px solid;
  border-color: #242328;
  transition: border-color 0.25s ease-out;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border-color: orange;
    transition: border-color 0.25s ease-in;
  }
`;

export const SquareContent = styled.div `
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
    color: rgb(191, 191, 191);
  }
`;

export const FlatButton = styled.button `
  padding: 10px 50px;
  border-radius: 100px;
  border: 0px solid;
  cursor: pointer;

  color: white;
  font-family: 'Source Sans Pro';
  font-size: 24px;

  background-color: #ff8800;
  transition: background-color 0.5s;
  &:hover {
    background-color: #ca6c00;
  }
`;