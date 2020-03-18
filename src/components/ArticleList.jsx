import React, { Component } from "react";
import * as Api from "../api";
import ArticlesCard from "./ArticlesCard";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

class ArticleList extends Component {
  state = {
    articles: [],
    topic: undefined,
    filter: undefined,
    sort_by: undefined,
    isLoading: true,
    error: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by, filter } = this.state;
    const newTopic = topic !== prevState.topic;
    const newSort_by = sort_by !== prevState.sort_by;
    const newFilter = filter !== prevState.filter;
    if (newTopic || newFilter || newSort_by) {
      this.fetchArticles(sort_by, filter);
    }
  }

  setFilter = filter => {
    this.setState({ filter, isLoading: true });
  };

  fetchArticles = () => {
    const { sort_by, filter } = this.state;
    const { topic } = this.props;
    Api.getArticles(topic, sort_by, filter)
      .then(articles => {
        this.setState({ articles, isLoading: false, error: false });
      })
      .catch(err => {
        // console.dir(err);
        this.setState({ isLoading: false, error: true, errorMessage: err.msg });
      });
  };

  render() {
    const { articles, isLoading, error, errorMessage } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorPage err={errorMessage} />;
    }

    return (
      <>
        <div className="container">
          <select
            onChange={({ target: { value } }) =>
              this.setState({ sort_by: value })
            }
          >
            <option>created_at</option>
            <option>votes</option>
            <option>comment_count</option>
          </select>
        </div>

        <div>
          {articles.map(article => {
            return <ArticlesCard key={article.article_id} article={article} />;
          })}
        </div>
      </>
    );
  }
}

export default ArticleList;
