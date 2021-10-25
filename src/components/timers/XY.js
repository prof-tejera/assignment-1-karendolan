import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import {STATUS} from "../../utils/helpers"

class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSecs: 0,
      rounds:0,
      curSec: 0,
      curRound: 0,
      status: STATUS.RESET,
    };
  }

  onChange = (event) => {
    const num = parseInt(event.target.value);
    this.setState(
      {seconds: num > 0 ? num : 0,
      curSecond: num > 0 ? num : 0}
    );
  }

  render() {
    const {workSecs, rounds, curRound, curSecond} = this.state;
    const timerTitle = "XY";
    const inputs = [
       <Input
        onChange={this.onChange}
        label="Seconds"
        name="work"
        value={workSecs}
      />,
       <Input
        onChange={this.onChange}
        label="Rounds"
        name="rounds"
        value={rounds}
      />
    ];
    // Countdown displays the single count down time
    const displayTimes = [
      <DisplayTime
        seconds={curSecond}
        size='large'
      />
    ]

    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={workSecs}
            curSecond={curSecond}
            inputs={inputs}
            displayTimes={displayTimes}
            // onStart={onStartHandler}
            // onStop={onStopHandler}
            // onPause={onPauseHandler}
        />
      </div>
    );
  }
}

export default XY;
