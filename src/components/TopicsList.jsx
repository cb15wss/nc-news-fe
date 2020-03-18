import React, { Component } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";
import Loading from "./Loading";

class TopicsList extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    //console.log("render topics ", this.state.topics);
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="container">
        <TopicCard topics={topics} />
      </div>
    );
  }
}

export default TopicsList;
