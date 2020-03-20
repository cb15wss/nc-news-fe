import React from "react";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const {
    topic,
    title,
    author,
    comment_count,
    votes,
    article_id,
    body,
    created_at
  } = props.article;

  const datePosted = Date(created_at).slice(0, 24);

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-header">
          <h2>{title}</h2>Posted on {datePosted} by:
          <Link to={`/users/${author}`}>{author}</Link>
        </div>
        <div className="card-body">
          <p className="card-text">Topic: {topic}</p>
          <p className="card-text">{body}</p>
          <p className="badge badge-primary">comments: {comment_count}</p>
          <p className="card-text">Votes: {votes}</p>
          <Link to={`/articles/${article_id}`}>Read Article →</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
