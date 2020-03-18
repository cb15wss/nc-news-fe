import React from "react";
import { Link } from "@reach/router";

const UserCard = props => {
  const { username, name } = props.user;
  return (
    <>
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">
            {<Link to={`/users/${username}`}>{username}</Link>}
          </div>
          <div className="card-body">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
