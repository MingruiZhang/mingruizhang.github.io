import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style.css";

import ArticleData from "../articles/articleData";
import ArticlePreview from "./articlePreview";

export interface ArticleType {
  title: string;
  time: string;
  content: string;
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <div className="root">
          <section className="header-container">
            <h1 className="header">Mingrui Zhang</h1>
            <h3 className="header-sub">Think and Write. 随思而作.</h3>
          </section>
          <section className="main-container">
            {ArticleData.map((article: ArticleType) => (
              <ArticlePreview article={article} />
            ))}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
