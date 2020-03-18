import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const { topics } = props;
  return (
    <ul>
      {topics.map(topic => {
        return (
          <li key={topic.slug}>
            <div className="card">
              <h2 className="card-header">{topic.slug}</h2>
              <div className="card-body">
                <p className="card-text">{topic.description}</p>
                <Link to={`/articles/topic/${topic.slug}`}>
                  View Articles →
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicCard;
