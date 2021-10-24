import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputStyled = styled.input`
  display: block;
  width: 100px;
  padding: 5px 10px;
  text-align: left;
  text-decoration: none;
  background-color: white;
  border-width: medium;
  border-radius: 20px;
  margin-left: 10px;
`;

class Input extends React.Component {
  render() {
    const {value, onChange, name, label, maxNum} = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name}>{label}</label>
        <InputStyled
          id={name}
          name={name}
          type="number"
          min="0"
          max={maxNum}
          onChange={onChange}
          value={value > 0 ? value : ""}
        />
      </React.Fragment>
    )
  }
};

// Class description for the docs
Input.docs =   {
    title: 'Input ',
    props: [
      {
        prop: 'name',
        key: 'name',
        description: 'Name of input field',
        type: 'string',
        defaultValue: 'entry',
      },
      {
        prop: 'label',
        key: 'label',
        description: 'label for input field',
        type: 'string',
        defaultValue: 'Input',
      },
      {
        prop: 'value',
        key: 'value',
        description: 'Value of input field',
        type: 'number from 0 to maxNum',
        defaultValue: 'none',
      },
      {
        prop: 'maxNum',
        key: 'maxNum',
        description: 'Maximum input number',
        type: 'number',
        defaultValue: '86400',
      },
      {
        prop: 'onChange',
        key: 'onChange',
        description: "Callback for change of input",
        type: "function",
        defaultValue: "none",
      }
    ]
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  maxNum: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: 'Input',
  value: undefined,
  maxNum: 86400, // 24 hours
};

export default Input;
