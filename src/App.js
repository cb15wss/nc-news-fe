import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import TopicsList from "./components/TopicsList";
import ErrorPage from "./components/ErrorPage";
import UsersList from "./components/UsersList";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <div className="main">
        <Header username={username} />
        <NavBar />
        <Router>
          <Home path="/" />
          <ArticleList path="/articles/*" username={username} />
          <Article path="/articles/:article_id" username={username} />
          <TopicsList path="/topics" />
          <ArticleList path="/articles/topic/:topic" />
          <UsersList path="/users" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;
