import React from "react";
import { Link } from "react-router-dom";

import { ArticleProps } from "./types";
import styled from "@emotion/styled";

const ArticlePreviewContainer = styled.div`
  margin-bottom: 30px;
`;

const ArticlePreviewTime = styled.p({
  marginBottom: 5,
  color: "rgba(113, 129, 141, 1)"
});

const ArticlePreviewTitle = styled.h3({
  fontWeight: "bold",
  marginBottom: 5
});

const ArticlePreviewTitleLink = styled(Link)({
  borderBottom: "1px solid black"
});

const ArticlePreviewText = styled.p({
  whiteSpace: "pre-line"
});

const ArticlePreview = (props: ArticleProps) => {
  const {
    article: { id, content, title, time }
  } = props;
  const previewContent =
    content
      .split("\n\n")[0]
      .replace(/\n/g, " ")
      .substring(0, 50) + " ...";
  const htmlContent = { __html: previewContent };
  return (
    <ArticlePreviewContainer>
      <ArticlePreviewTime>{time}</ArticlePreviewTime>
      <ArticlePreviewTitle>
        <ArticlePreviewTitleLink to={`/article/${id}`}>{title}</ArticlePreviewTitleLink>
      </ArticlePreviewTitle>
      <ArticlePreviewText dangerouslySetInnerHTML={htmlContent} />
    </ArticlePreviewContainer>
  );
};

export default React.memo(ArticlePreview);
