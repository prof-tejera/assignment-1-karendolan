import React from "react";

// Import components
import DisplayTime from "../generic/DisplayTime";
import Input from "../generic/Input";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  onSubmit(seconds) {
    this.setState({seconds: seconds});
  }

  render() {
    return (
      <div>
        <DisplayTime
        />
        <Input
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default Stopwatch;
