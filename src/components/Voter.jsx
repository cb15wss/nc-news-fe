import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class Vote extends Component {
  state = { voteToAdd: 0, disabled: false, error: null };
  render() {
    const { votes } = this.props;
    const { voteToAdd, disabled, error } = this.state;

    if (error) {
      return <ErrorPage err={error} />;
    }
    return (
      <>
        <div className="container">
          <p className="card-text">
            <button
              className="btn-sm btn-success m-2"
              disabled={disabled === true}
              onClick={() => this.addVote(1)}
            >
              +
            </button>
            Votes: {votes + voteToAdd}
            <button
              className="btn-sm btn-danger m-2"
              disabled={disabled === true}
              onClick={() => this.addVote(-1)}
            >
              -
            </button>
          </p>
        </div>
      </>
    );
  }

  addVote = vote => {
    const { voteToAdd } = this.state;
    if (voteToAdd === vote) {
      this.setState({ voteToAdd: 0 });
      vote *= -1;
    } else {
      this.setState({ voteToAdd: vote });
    }
    const { target, id } = this.props;

    api.patchVote(target, id, vote).catch(err => {
      this.setState({ voteToAdd: 0 });
    });
  };
}

export default Vote;
