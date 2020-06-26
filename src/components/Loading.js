import React, { Component } from "react";
import { Link } from "react-router-dom";

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;
    return loaded ? children : (
      <>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
        />
      </div>
      <div className="loading-message">
        <p>Been here a while? Something might have gone wrong. Click the button to go to home</p>
        <Link to={`/`}>
          <p className="btn btn-danger">Home</p>
        </Link>
      </div>
      </>
    );
  }
}

export default Loading;