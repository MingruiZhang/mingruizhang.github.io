import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";

import ArticleData from "../articles/articleData";

import Article from "./Article";
import Home from "./Home";
import { ArticleType } from "./types";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="root">
          <Route exact path="/" render={() => <Home articleData={ArticleData} />} />
          <Route
            path="/article/:articleId"
            render={({ match }) => {
              const articleId = match.params.articleId;
              const matchingArticle = ArticleData.find((article: ArticleType) => article.id === articleId);
              return <Article article={matchingArticle} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
