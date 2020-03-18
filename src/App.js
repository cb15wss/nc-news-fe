import React from "react";
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

function App() {
  return (
    <div className="main">
      <Header />
      <NavBar />
      <Router>
        <Home path="/" />
        <ArticleList path="/articles" />
        <Article path="/articles/:article_id" />
        <ArticleList path="/articles/topic/:topic" />
        <TopicsList path="/topics" />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
