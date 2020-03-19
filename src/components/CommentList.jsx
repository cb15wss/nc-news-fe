import React, { Component } from "react";
import { getArticleComments, deleteById } from "../api";
import CommentCard from "./CommentCard";
import SubmitComment from "./SubmitComment";

class CommentList extends Component {
  state = { comments: [], isLoading: true, error: false, errorMessage: "" };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getArticleComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  pushComment = commentToSubmit => {
    this.setState(currentState => {
      return { comments: [commentToSubmit, ...currentState.comments] };
    });
  };

  removeComment = comment_id => {
    deleteById(comment_id).then(() => {
      this.setState(currentState => {
        const commentsArray = currentState.comments.filter(comment => {
          return comment.comment_id !== comment_id;
        });
        return { comments: commentsArray };
      });
    });
  };

  render() {
    const { comments } = this.state;
    const { article_id, username } = this.props;
    return (
      <div className="container">
        <SubmitComment
          pushComment={this.pushComment}
          article_id={article_id}
          username={username}
        />
        <h3>Comments</h3>
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                username={username}
                removeComment={this.removeComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
