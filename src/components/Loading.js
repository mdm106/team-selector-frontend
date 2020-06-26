import React, { Component } from "react";

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;
    return loaded ? children : (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
        />
      </div>
    );
  }
}

export default Loading;