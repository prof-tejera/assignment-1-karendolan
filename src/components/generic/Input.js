import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    const {value, onChange, name, label, maxNum} = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          name={name}
          type="number"
          min="0"
          max={maxNum}
          onChange={onChange}
          value={value}
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
        defaultValue: 'Entry',
      },
      {
        prop: 'value',
        key: 'value',
        description: 'Value of input field',
        type: 'number from 0 to maxNum',
        defaultValue: '0',
      },
      {
        prop: 'maxNum',
        key: 'maxNum',
        description: 'Maximum number allowed in input field',
        type: 'number',
        defaultValue: '86400 (seconds in 24 hours)',
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
  name: 'Entry',
  value: 0,
  maxNum: 86400, // 24 hours
};

export default Input;
