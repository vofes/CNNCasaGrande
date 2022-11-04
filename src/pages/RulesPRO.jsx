import React from "react";
import styled from "styled-components";
import { Dropdown } from "./Rules/RulesStyle";

import { Chapter1 } from "./Rules/PRO/Chapter1";
import { Chapter2 } from "./Rules/PRO/Chapter2";
import { Chapter3 } from "./Rules/PRO/Chapter3";
import { Chapter4 } from "./Rules/PRO/Chapter4";
import { Chapter5 } from "./Rules/PRO/Chapter5";
import { Chapter6 } from "./Rules/PRO/Chapter6";
import { Chapter7 } from "./Rules/PRO/Chapter7";
import { Chapter8 } from "./Rules/PRO/Chapter8";
import { Chapter9 } from "./Rules/PRO/Chapter9";
import { Chapter10 } from "./Rules/PRO/Chapter10";
import { Chapter11 } from "./Rules/PRO/Chapter11";
import { Chapter12 } from "./Rules/PRO/Chapter12";
import { Chapter13 } from "./Rules/PRO/Chapter13";

const PageContainer = styled.div`
    margin-top: 25px;
    margin-bottom: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`

const Chapter = styled.span `
  color: orange;
`

const Title = styled.span `
    font-family: 'courier new';
  font-size: 24px;
`

const PageTitle = styled.h2 `
    font-family: 'Impact';
    font-weight: normal;
`;

function RulesPRO() {
  return (
    <PageContainer>
        <PageTitle>[OOC/IC] Правила Редактирования Объявлений [ПРО].</PageTitle>
      <Dropdown
        title={(<p><Title><Chapter>Глава I. </Chapter>Общее положение</Title><br/></p>)}
        content={( <Chapter1/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава II. </Chapter>Основные правила редактирования.</Title><br/></p>)}
        content={( <Chapter2/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава III. </Chapter>Аббревиатуры и сокращения.</Title><br/></p>)}
        content={( <Chapter3/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава IV. </Chapter>Замены запрещенных слов.</Title><br/></p>)}
        content={( <Chapter4/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава V. </Chapter>Форматирование цен в объявлениях.</Title><br/></p>)}
        content={( <Chapter5/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава VI. </Chapter>Недвижимое имущество.</Title><br/></p>)}
        content={( <Chapter6/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава VII. </Chapter>Транспортные средства.</Title><br/></p>)}
        content={( <Chapter7/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава VIIX. </Chapter>Аксессуары, скины и модификации.</Title><br/></p>)}
        content={( <Chapter8/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава IX. </Chapter>Политическая деятельность.</Title><br/></p>)}
        content={( <Chapter9/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава X. </Chapter>Прочие предметы и объявления.</Title><br/></p>)}
        content={( <Chapter10/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава XI. </Chapter>Продажи, обмены, покупки.</Title><br/></p>)}
        content={( <Chapter11/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава XII. </Chapter>Мафии и банды.</Title><br/></p>)}
        content={( <Chapter12/> )}/>

      <Dropdown
        title={(<p><Title><Chapter>Глава XIII. </Chapter>Запрещенные виды объявлений.</Title><br/></p>)}
        content={( <Chapter13/> )}/>



    </PageContainer>
  );
}

export default RulesPRO;