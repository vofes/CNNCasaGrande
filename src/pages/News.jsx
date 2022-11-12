import React from "react";
import styled from "styled-components";

import Header from "./Header";
import { PageContainer, Page, lightGrayColor, grayColor } from "./UniversalStyle";

import BackgroundImage from "../images/background3.jpg";

const Post = styled.div `
    background-color: ${grayColor};
    padding: 15px;
    margin-top: 25px;
    border-radius: 15px;

    a {
        text-decoration: none;
        color: white;
        font-style: italic;
    }
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
                <Date>30.10.2022</Date>
                <Title>Update #19</Title>
                <Content>
                    - Онлайн-тесты были обновлены вопросы в практических частях тестов на ПРО и Устав, а так же на 5 ранг.
                    <br/>- В онлайн-тестах добавлены 2 ранга: Куратор онлайн-аттестаций и Проверяющий онлайн-аттестаций.
                </Content>
                <Date>ɴᴏʀᴍᴀɴ sᴏᴘʀᴀɴᴏ</Date>
            </Post>

            <Post>
                <Date>25.10.2022</Date>
                <Title>Update #18</Title>
                <Content>
                    Из Правил Проведения Эфиров удален пункт:
                    - "1.5. При проведении развлекательных эфиров запрещено использовать биндер".
                    Подробнее - <a href="https://forum.arizona-rp.com/threads/4761678/post-27592693">https://forum.arizona-rp.com/threads/4761678/post-27592693</a>
                </Content>
                <Date>ɴᴏʀᴍᴀɴ sᴏᴘʀᴀɴᴏ</Date>
            </Post>
        </Page>
      </PageContainer>
    </div>
  );
}

export default News;