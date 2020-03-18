import React, { Component } from "react";
import { getArticleComments } from "../api";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = { comments: [], isLoading: true, error: false, errorMessage: "" };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getArticleComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <>
        <h2>Article Comments</h2>
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
