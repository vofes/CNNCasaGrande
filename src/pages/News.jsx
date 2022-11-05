import React from "react";
import styled from "styled-components";

import Header from "./Header";
import { PageContainer, Page, lightGrayColor, grayColor } from "./UniversalStyle";

import BackgroundImage from "../images/background.png";

const Post = styled.div `
    background-color: ${grayColor};
    padding: 15px;
    margin-top: 25px;
    border-radius: 15px;
`;

const Title = styled.h1 `
    margin: 0;
`;

const Date = styled.p `
    color: ${lightGrayColor};
    margin: 0;
`;

const Content = styled.div `
    margin: 15px 0px;
    color: white;
`;

function News() 
{
  return (
    <div>
      <Header background={BackgroundImage} title={"Новости и изменения"}></Header>
      <PageContainer>
        <Page>
            <Post>
                <Date>05.11.2022</Date>
                <Title>Update #1</Title>
                <Content>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  
                    <br/> sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    <br/> magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    <br/> et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    <br/> no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    <br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                    <br/> diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    <br/> aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                    <br/> duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                    <br/> sanctus est Lorem ipsum dolor sit amet.
                </Content>
            </Post>

            <Post>
                <Date>04.11.2022</Date>
                <Title>Update #2</Title>
                <Content>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                    sanctus est Lorem ipsum dolor sit amet.
                </Content>
            </Post>
        </Page>
      </PageContainer>
    </div>
  );
}

export default News;