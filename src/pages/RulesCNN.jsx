import React from "react";
import styled from "styled-components";
import { ULink } from "./NavBar";

const BodyContainer = styled.div ` 

`;

const Header = styled.div ` 

`;

const Title = styled.h2 `
  color: white;
`;

const Sections = styled.div `

`;

const Section = styled.div `

`;

function RulesCNN() {
  return (
    <BodyContainer>
      <Header>
        <Title>Разделы</Title>
      </Header>
      <Sections>

        <Section>
          <ULink to="/rulesCNN/PRO">[OOC/IC] Правила Редактирования Объявлений [ПРО].</ULink>
        </Section>

      </Sections>
    </BodyContainer>
  );
}

export default RulesCNN;