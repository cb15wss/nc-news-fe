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
      <div className="card-body">
        <h2 className="card-title">{title}</h2> Posted on {datePosted} by:
        <Link to={`/users/${author}`}>{author}</Link>
        <p className="card-text">{body}</p>
        <p className="badge badge-primary">comments: {comment_count}</p>
        <p className="card-text">Votes: {votes}</p>
        <Link to={`/articles/${article_id}`}>Read Article →</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
