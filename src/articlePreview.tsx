import * as React from "react";
import { ArticleType } from "./index";

export interface ArcticlePreviewProps {
  article: ArticleType;
}

export default class ArticlePreview extends React.Component<ArcticlePreviewProps, {}> {
  render() {
    const {
      article: { content, title, time }
    } = this.props;
    const previewContent = content.split("。")[0] + " ...";
    const htmlContent = { __html: previewContent };
    return (
      <div className="article-preview-container">
        <p className="article-preview-time">{time}</p>
        <h3 className="article-preview-header">
          <a href="#">{title}</a>
        </h3>
        <p className="article-preview-text" dangerouslySetInnerHTML={htmlContent} />
      </div>
    );
  }
}
