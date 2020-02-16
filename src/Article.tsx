import React from "react";
import { ArticleProps } from "./types";
import styled from "@emotion/styled";

const ArticleTitle = styled.h3({
  marginBottom: 5,
  fontSize: "1.6em"
});

const ArticleTime = styled.p({
  marginBottom: 30,
  color: "rgba(113, 129, 141, 1)"
});

const ArticleText = styled.p`
  white-space: pre-line;
`;

const Article = (props: ArticleProps) => {
  const {
    article: { content, title, time }
  } = props;
  const htmlContent = { __html: content };
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleTime>{time}</ArticleTime>
      <ArticleText dangerouslySetInnerHTML={htmlContent} />
    </>
  );
};

export default React.memo(Article);
