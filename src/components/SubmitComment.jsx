import React, { Component } from "react";
import { insertComment } from "../api";
import ErrorPage from "./ErrorPage";

class SubmitComment extends Component {
  state = {
    title: "",
    body: "",
    showForm: false,
    error: false,
    errorMessage: ""
  };
  render() {
    const { body, showForm, error, errorMessage } = this.state;
    const { username } = this.props;
    if (error) {
      return <ErrorPage err={errorMessage} />;
    }
    return (
      <div className="container">
        <button className="btn btn-warning" onClick={this.toggleViewForm}>
          Post Your Comment as {username}
        </button>
        {showForm && (
          <form onSubmit={this.SubmitComment}>
            <div className="form-group">
              <label htmlFor="body">Add your Message below: </label>
              <textarea
                type="text"
                className="form-control"
                id="body"
                name="body"
                onChange={this.handleChange}
                value={body}
                placeholder="Message Body"
              ></textarea>
            </div>
            <button className="btn btn-primary m-2" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }

  toggleViewForm = () => {
    this.setState(currentState => {
      return { showForm: !currentState.showForm };
    });
  };

  SubmitComment = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username, pushComment } = this.props;
    if (body) {
      this.setState({ body: "", showForm: false });
      const { article_id } = this.props;
      insertComment(article_id, { username: username, body: body })
        .then(comment => {
          pushComment(comment);
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            error: true,
            errorMessage: err.msg
          });
        });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
