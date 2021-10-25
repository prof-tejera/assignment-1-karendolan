import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      curSecond: 0,
    };
  }

  onChange = (event) => {
    const num = parseInt(event.target.value);
    this.setState({seconds: num > 0 ? num : 0});
  }

  render() {
    const {seconds, curSecond} = this.state;
    const timerTitle = "Stopwatch";
    const inputs = [
         <Input
          onChange={this.onChange}
          label="Time"
          name="seconds"
          value={seconds}
        />
    ];
    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={seconds}
            curSecond={curSecond}
            inputs={inputs}
            // onStart={onStartHandler}
            // onStop={onStopHandler}
            // onPause={onPauseHandler}
        />
      </div>
    );
  }
}

export default Stopwatch;
