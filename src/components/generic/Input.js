import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const primaryColor =  GENERIC.INPUT.background;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 330px;
`;

const InputStyled = styled.input`
  flex: 1;
  padding: 5px 10px;
  width: 80px;
  text-align: left;
  text-decoration: none;
  color: ${GENERIC.INPUT.color};
  background-color: ${primaryColor};
  border-width: medium;
  border-radius: 20px;
  margin-left: 10px;
`;

const LabelStyled = styled.label`
  flex: 1;
  color: ${GENERIC.INPUT.color};
`;

class Input extends React.Component {
  render() {
    const {value, onChange, name, label, maxNum} = this.props;
    return (
      <InputContainer>
        <LabelStyled
          htmlFor={name}
        >
          {label}
          :
        </LabelStyled>
        <InputStyled
          id={name}
          name={name}
          type="number"
          min="0"
          max={maxNum}
          onChange={onChange}
          value={value > 0 ? value : ""}
        />
      </InputContainer>
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
