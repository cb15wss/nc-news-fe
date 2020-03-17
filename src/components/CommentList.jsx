import React, { Component } from "react";
import { getArticleComments } from "../api";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = { comments: [] };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getArticleComments(article_id).then(comments => {
      console.log("comments", comments);
      this.setState({ comments });
    });
  };

  render() {
    console.log("comments in render", this.state.comments);
    const { comments } = this.state;
    return (
      <div className="container">
        <h2>Comments</h2>

        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
