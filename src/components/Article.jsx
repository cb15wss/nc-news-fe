import React, { Component } from "react";
import { getArticle } from "../api";
import { Link } from "@reach/router";
import CommentList from "./CommentList";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

class Article extends Component {
  state = { article: {}, error: false, isLoading: true, notFound: false };

  componentDidMount() {
    this.fetchArticle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticle();
    }
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    getArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        // console.dir(err);
        this.setState({ isLoading: false, notFound: true });
      });
  };

  render() {
    const {
      article: { title, body, votes, topic, author, created_at, comment_count },
      isLoading,
      notFound
    } = this.state;

    if (isLoading) return <Loading />;
    if (notFound) return <ErrorPage />;
    return (
      <div className="container">
        <h3>Article ID {this.props.article_id}</h3>
        <div className="card">
          <div className="card-header">
            <h2>{title}</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">Topic: {topic}</h5>
            <p className="card-text">{body}</p>
            <p className="card-text">Votes: {votes}</p>
            <p className="card-text">Comments: {comment_count}</p>
          </div>
          <div className="card-footer text-muted">
            Created on {created_at} by:
            <Link to={`/users/${author}`}> {author}</Link>
          </div>
        </div>
        <CommentList article_id={this.props.article_id} />
      </div>
    );
  }
}

export default Article;
