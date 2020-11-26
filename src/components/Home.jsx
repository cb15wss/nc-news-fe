import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron p-8 p-md-5 text-Grey rounded bg-light">
        <div className="col-md-10 px-0">
          <h1 className="display-4 font-italic">Featured Article</h1>
          <h2>CHRISTINE BANDA'S ‘OUTSTANDING’ HONOUR</h2>
          <div className="col-sm-4">
            <img
              src="../images/tina.jpg"
              alt="Christine Banda"
            />
          </div>

          <p className="lead my-3">
            She was one of five students from universities in the UK to be named
            as a finalist in the Worshipful Company of Information Technologists
            (WCIT) Outstanding Information Technology Student Awards.
          </p>

          <div className="lead mb-0">
            <a
              href="https://www.theboltonnews.co.uk/news/17591365.first-class-result-
              for-single-mum-of-four-who-came-to-bolton-to-start-a-new-life/"
              className="text-white font-weight-bold"
            >
              <h2>Read More...</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="/articles" className="navbar-brand">
          <h3 className="pb-3 mb-4 font-italic border-bottom">
            Go to All Articles...
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;
