import React, { Component } from "react";
import * as Api from "../api";
import ArticlesCard from "./ArticlesCard";

class ArticleList extends Component {
  state = { articles: [], topic: undefined };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.state;

    const newTopic = topic !== prevState.topic;

    if (newTopic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    Api.getArticles(topic)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(console.dir);
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}

export default ArticleList;
