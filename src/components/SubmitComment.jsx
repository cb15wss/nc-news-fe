import React, { Component } from "react";
import { insertComment } from "../api";

class SubmitComment extends Component {
  state = { title: "", body: "", viewForm: false };
  render() {
    const { body, viewForm } = this.state;
    console.log(this.props);

    return (
      <>
        <button className="btn btn-warning m-2" onClick={this.toggleViewForm}>
          Post Your Comment as {this.props.username}
        </button>
        {viewForm && (
          <form onSubmit={this.SubmitComment}>
            <div className="form-group">
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
      </>
    );
  }

  toggleViewForm = () => {
    this.setState(currentState => {
      return { viewForm: !currentState.viewForm };
    });
  };

  SubmitComment = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username } = this.props;
    const { pushComment } = this.props;
    if (body) {
      this.setState({ body: "", showForm: false });
      const { article_id } = this.props;
      insertComment(article_id, { username: username, body: body })
        .then(comment => {
          pushComment(comment);
        })
        .catch(err => {
          console.dir(err);
        });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
