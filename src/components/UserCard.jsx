import React from "react";

const UserCard = props => {
  const { username, name } = props.user;
  return (
    <>
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">{username}</div>
          <div className="card-body">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
