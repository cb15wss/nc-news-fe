import React from "react";
import { Link } from "@reach/router";

const ArticlesCard = props => {
  //console.log("articleCard props ", props);
  const { article } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>{article.title}</h2>{" "}
        </div>
        <div className="card-body">
          <h5 className="card-title">Topic: {article.topic}</h5>{" "}
          <p className="card-text">Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <Link to={`/articles/${article.article_id}`}>Read Article →</Link>
        </div>
        <div className="card-footer text-muted">
          Posted on {article.created_at} by:
          <Link to={`/users/${article.author}`}>{article.author}</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
