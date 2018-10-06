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
    const header = `${title} - ${time}`;
    const htmlContent = { __html: content };
    return (
      <React.Fragment>
        <h3>{header}</h3>
        <p className="article-preview-text" dangerouslySetInnerHTML={htmlContent} />
      </React.Fragment>
    );
  }
}
