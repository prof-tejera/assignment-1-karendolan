import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const primaryColor = "#ffa2bf";

// Make rounded corner button, but not as round as the RoundsDisplay
// Add different style for hover and active (click) to emphasize user action
const ButtonStyled = styled.input`
  display: block;
  width: 100px;
  height: 60px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 20px;
  color: ${(props) => props.active ? "purple" : "blue"};
  &:hover {
        outline: none;
        box-shadow: 0px 0px 6px black;
    };
  &:active {
        outline: none;
        box-shadow: 0px 0px 2px red;
        color: green;
        opacity: 0.8;
    };
`;

class Button extends React.Component {
  render() {
    const {size, color, text, onClick} = this.props;
    return (
        <ButtonStyled
          size={size}
          type="Button"
          value={text}
          color={color}
          active={true}
          onClick={onClick}
        />
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
        description: "Changes the size of the button",
        type: "string",
        defaultValue: "medium",
      },
      {
        prop: 'color',
        key: 'color',
        description: "Changes the color of the button",
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
        defaultValue: "ClickMe",
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
  text: "ClickMe",
};

export default Button;
