import React from "react";
import PropTypes from "prop-types";

class DisplayRounds extends React.Component {
  render() {
    const size = sizeMapping[this.props.size];
    const { color } = this.props;

    return (
      <div>
        DisplayRounds!
      <div />
    );
  }
}

DisplayRounds.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
};

DisplayRounds.defaultProps = {
  size: "medium",
  color: primaryColor,
};

export default DisplayRounds;
