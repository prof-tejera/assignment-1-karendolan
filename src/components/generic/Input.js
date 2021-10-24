import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
    };
  }

  // Update the hour, min, sec values
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  // Convert to seconds
  handleSubmit(event) {
    const {hour, min, sec} = this.state;
    const totalSeconds = hour * 60 * 60 + min * 60 + sec;
    this.props.onSubmit(totalSeconds);
  }

  render() {
    // const { onSubmit } = this.props;
    const {hour, min, sec} = this.state;
    return (
      <form>
        <label>
          Hour:
          <input type="text" name="hour" value={hour} />
        </label>
        <label>
          Min:
          <input type="text" name="min" value={min} />
        </label>
        <label>
          Sec:
          <input type="text" name="sec" value={sec} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

Input.propTypes = {
  onSubmit: PropTypes.func,
};

export default Input;
