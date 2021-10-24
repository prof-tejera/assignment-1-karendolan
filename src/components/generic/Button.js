import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const primaryColor = "#ffa2bf";

const sizeMapping = {
  small: 10,
  medium: 14,
  large: 20,
};

const ButtonContainer = styled.div`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
`;

class Button extends React.Component {
  render() {
    <ButtonContainer
      
    />
    const size = sizeMapping[this.props.size];
    const { color } = this.props;
    return (
      <div>
        Button!
      </div>
    );
  }
};

// Class description for the docs
Button.docs =   {
    title: 'Button ',
    props: [
      {
        prop: 'size',
        key: 'size',
        description: "Changes the size of the loading spinner",
        type: "string",
        defaultValue: "medium",
      },
      {
        prop: 'color',
        key: 'color',
        description: "Changes the color of the loading spinner",
        type: "string",
        defaultValue: primaryColor,
      },
      {
        prop: 'text',
        key: 'text',
        description: "The text to display on the button",
        type: "string",
        defaultValue: "none",
      },
      {
        prop: 'onClick',
        key: 'onClick',
        description: "Callback for click event on button",
        type: "function",
        defaultValue: "none",
      }
    ]
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  size: "medium",
  color: primaryColor,
  text: "",
};

export default Button;
