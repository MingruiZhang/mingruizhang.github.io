import * as React from "react";
import { ArticleProps } from "./types";

export default class Article extends React.Component<ArticleProps, {}> {
  render() {
    const {
      article: { content, title, time }
    } = this.props;
    const htmlContent = { __html: content };
    return (
      <React.Fragment>
        <div className="article-container">
          <h3 className="article-title">{title}</h3>
          <p className="article-time">{time}</p>
          <p className="article-text" dangerouslySetInnerHTML={htmlContent} />
        </div>
      </React.Fragment>
    );
  }
}
