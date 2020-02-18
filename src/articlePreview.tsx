import React from "react";
import { Link } from "react-router-dom";

import { ArticleProps } from "./types";
import styled from "@emotion/styled";

const ArticlePreviewContainer = styled.div`
  margin-bottom: 30px;
`;

const ArticlePreviewTime = styled.p({
  marginBottom: 5,
  fontSize: "0.85em",
  color: "rgba(113, 129, 141, 1)"
});

const ArticlePreviewTitle = styled.h3({
  marginBottom: 5
});

const ArticlePreviewTitleLink = styled(Link)({
  borderBottom: "1px solid black"
});

const ArticlePreviewText = styled.span({
  whiteSpace: "pre-line",
  fontSize: "0.85em",
});

const ArticlePreviewCount = styled.i({
  color: "rgba(113, 129, 141, 1)",
  fontSize: "0.85em",
})

const ArticlePreview = (props: ArticleProps) => {
  const {
    article: { id, content, title, time }
  } = props;
  console.log('content2: ', title, content.length);
  const previewContent =
    content
      .split("\n\n")[0]
      .replace(/\n/g, " ")
  const htmlContent = { __html: `${previewContent}... ` };
  return (
    <ArticlePreviewContainer>
      <ArticlePreviewTime>{time}</ArticlePreviewTime>
      <ArticlePreviewTitle>
        <ArticlePreviewTitleLink to={`/article/${id}`}>{title}</ArticlePreviewTitleLink>
      </ArticlePreviewTitle>
      <ArticlePreviewText dangerouslySetInnerHTML={htmlContent} />
      <ArticlePreviewCount>({content.length} w.)</ArticlePreviewCount>
    </ArticlePreviewContainer>
  );
};

export default React.memo(ArticlePreview);
