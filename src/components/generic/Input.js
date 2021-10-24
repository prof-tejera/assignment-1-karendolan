import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    const size = sizeMapping[this.props.size];
    const { color } = this.props;

    return (
      <div>
        DisplayTime!
      <div />
    );
  }
};

export default Input;
