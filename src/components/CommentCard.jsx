import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const CommentCard = ({ comment, index, username, removeComment }) => {
  // console.log(username);
  const { author, created_at, body, comment_id, votes } = comment;
  return (
    <>
      <li className="card mb-4" key={comment_id}>
        <div className="card-body">
          <p className="card-text">{body}</p>
          Posted on {created_at} <br /> by:
          <Link to={`/users/${author}`}>{author}</Link>
          {username !== author && (
            <Voter votes={votes} id={comment_id} target={"comments"} />
          )}
        </div>

        {username === author && (
          <button
            className="btn btn-danger"
            onClick={() => removeComment(comment_id, "comments", index)}
          >
            Delete Comment
          </button>
        )}
      </li>
    </>
  );
};

export default CommentCard;
