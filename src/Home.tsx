import React from "react";
import styled from "@emotion/styled";

import ArticlePreview from "./ArticlePreview";
import { ArticleType, MainProps } from "./types";

const HeaderSection = styled.section({
  marginBottom: 50,
  textAlign: "center"
});

const HeaderTitle = styled.h1({
  fontSize: 36
});

const HeaderSubtitle = styled.h3({
  fontWeight: 300,
  fontSize: "1.2em",
  margin: "10px 20px 10px"
});

const Home = ({ articleData }: MainProps) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <HeaderTitle>Inspirations</HeaderTitle>
        <HeaderSubtitle>whatever comes to mind...</HeaderSubtitle>
      </HeaderSection>
      <section>
        {articleData.map((article: ArticleType) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default React.memo(Home);
