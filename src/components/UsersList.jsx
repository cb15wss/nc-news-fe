import React, { Component } from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import Loading from "./Loading";

class UsersList extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <>
        <div className="container">
          <h2>All Users</h2>
          <ul>
            {users.map(user => {
              return <UserCard user={user} key={user.username} />;
            })}
          </ul>
        </div>
      </>
    );
  }

  fetchUsers = () => {
    getUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default UsersList;
