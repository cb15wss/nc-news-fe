import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <div className="container">
      <h2>Page not found {err}</h2>
    </div>
  );
};

export default ErrorPage;
