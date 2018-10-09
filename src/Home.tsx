import * as React from "react";

import ArticlePreview from "./ArticlePreview";
import { ArticleType, MainProps } from "./types";

export default class Home extends React.Component<MainProps, {}> {
  render() {
    const { articleData } = this.props;
    return (
      <React.Fragment>
        <section className="header-container">
          <h1 className="header">Mingrui Zhang</h1>
          <h3 className="header-sub">Think and Write. 随思而作.</h3>
        </section>
        <section className="main-container">
          {articleData.map((article: ArticleType) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
