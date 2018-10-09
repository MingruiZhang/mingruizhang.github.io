import * as React from "react";
import { Link } from "react-router-dom";

import { ArticleProps } from "./types";

export default class ArticlePreview extends React.Component<ArticleProps, {}> {
  render() {
    const {
      article: { id, content, title, time }
    } = this.props;
    const previewContent = content.split("。")[0] + " ...";
    const htmlContent = { __html: previewContent };
    return (
      <div className="article-preview-container">
        <p className="article-preview-time">{time}</p>
        <h3 className="article-preview-title">
          <Link to={`/article/${id}`} >{title}</Link>
        </h3>
        <p className="article-preview-text" dangerouslySetInnerHTML={htmlContent} />
      </div>
    );
  }
}
