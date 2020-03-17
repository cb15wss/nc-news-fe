import React, { Component } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  render() {
    console.log("render topics ", this.state.topics);
    const { topics } = this.state;

    return (
      <div className="container">
        <TopicCard topics={topics} />
      </div>
    );
  }
}

export default TopicsList;
