import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const primaryColor =  GENERIC.BUTTON_COLORS.active.color;

const sizeMapping = {
  small: 60,
  medium: 80,
  large: 100,
};

// Make rounded corner button, but not as round as the RoundsDisplay
// Add different style for hover and active (click) to emphasize user action
const ButtonStyled = styled.input`
  display: block;
  width: ${(props) => props.size}px;
  height: 60px;
  margin: 7px;
  text-align: center;
  font-size: .9em;
  text-decoration: none;
  background-color: ${(props) => {
    return GENERIC.BUTTON_COLORS[props.activeKey].background
  }};
  color: ${(props) => {
    return GENERIC.BUTTON_COLORS[props.activeKey].color
  }};
  border: none;
  border-radius: 10px;
  &:hover {
        outline: none;
        box-shadow: 0px 0px 6px black;
    };
  &:active {
        outline: none;
        box-shadow: 0px 0px 2px red;
        opacity: 0.8;
    };
`;

class Button extends React.Component {
  render() {
    const {active, text, onClick} = this.props;
    const size = sizeMapping[this.props.size];
    return (
        <ButtonStyled
          size={size}
          type="Button"
          value={text}
          activeKey={ active ? 'active' : 'inactive' }
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
        prop: 'active',
        key: 'active',
        description: 'Identifies the primary button',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        prop: 'text',
        key: 'text',
        description: 'The text to display on the button',
        type: 'string',
        defaultValue: 'none',
      },
      {
        prop: 'onClick',
        key: 'onClick',
        description: 'Callback for click event on button',
        type: 'function',
        defaultValue: 'ClickMe',
      }
    ]
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  size: 'medium',
  text: 'ClickMe',
  color: primaryColor,
};

export default Button;
