import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const size = sizeMapping[this.props.size];
    const { color } = this.props;

    return (
      <div>
        Button!
      </div>
    );
  }
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
};

Button.defaultProps = {
  size: "medium",
  color: primaryColor,
};

export default Button;
