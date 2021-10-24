import React from "react";
import PropTypes from "prop-types";

class DisplayTime extends React.Component {
  render() {
    const size = sizeMapping[this.props.size];
    const { color } = this.props;

    return (
      <div>
        DisplayTime!
      <div />
    );
  }
}

DisplayTime.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
};

DisplayTime.defaultProps = {
  size: "medium",
  color: primaryColor,
};

export default DisplayTime;
