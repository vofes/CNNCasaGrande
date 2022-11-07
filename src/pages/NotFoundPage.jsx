import React from "react";

import Header from "./Header";
import { PageContainer, Page, Title, ULink } from "./UniversalStyle";

import BackgroundImage from "../images/background1.jpg";

function NotFoundPage() 
{
  return (
    <div>
      <Header background={BackgroundImage} title={"404 / Page not found"}>
        <ULink to="/">Обратно на главную</ULink>
        <Title></Title> {/* <- Just some offset */}
      </Header>
      <PageContainer>
        <Page>

        </Page>
      </PageContainer>
    </div>
  );
}

export default NotFoundPage;