import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/ArticleView";
import TopicList from "./components/TopicList";
import ErrorPage from "./components/ErrorPage";
import UserList from "./components/UserList";

class App extends Component {
  state = {
    // username: "jessjelly"
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
          <ArticleView path="/articles/:article_id" username={username} />
          <TopicList path="/topics" />
          <ArticleList path="/articles/topic/:topic" />
          <UserList path="/users" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;
