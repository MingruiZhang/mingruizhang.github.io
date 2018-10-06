import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style.css";

import ArticlePreview from "./articlePreview";
import ArticleData from "./articles-json/articleData";

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
            <h3 className="header-sub">A place I think and write.</h3>
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
