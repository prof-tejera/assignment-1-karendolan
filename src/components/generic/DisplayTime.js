import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const fontSizeMap = {
  small: '.8em',
  medium: '1em',
  large: '3.4em',
};

const Container = styled.div`
  text-align: center;
  font-size: ${(props) => props.size};
  color: ${(props) => {
    return GENERIC.DISPLAY_TIME[props.activeKey].color
  }};
`;

const Label = styled.span`
  margin-right: 5px;
  color: ${GENERIC.DISPLAY_TIME.label.color};
`;

class DisplayTime extends React.Component {
  render() {
    // const seconds = 7446; //2hr, 4 min, 6 secs
    const { seconds, label, active, size } = this.props;
    const textSize = fontSizeMap[size];
    // TODO: Move this to Utils area?
    // Split the seconds into Hour :  Min : Sec
    const hour = Math.floor(seconds / (60 * 60));
    const min = Math.floor(seconds % (60 * 60) / 60);
    const sec = Math.floor(seconds % (60 * 60) % 60);
    return (
      <Container
        size={textSize}
        activeKey={active ? 'active' : 'inactive'}
      >
        {label && <Label>{label}</Label>}
        {('00' + hour).slice(-2)}
        :
        {('00' + min).slice(-2)}
        :
        {('00' + sec).slice(-2)}
      </Container >
    );
  }
};

// Class description for the docs
DisplayTime.docs =   {
    title: 'Display Time ',
    props: [
      {
        prop: 'seconds',
        key: 'seconds',
        description: "Changes the time diplayed",
        type: "integer",
        defaultValue: 0,
      },
      {
        prop: 'label',
        key: 'label',
        description: 'Optional label for display time',
        type: 'string',
        defaultValue: 'none',
      },
      {
        prop: 'size',
        key: 'size',
        description: 'Size of display time',
        type: 'string',
        defaultValue: 'medium',
      }
    ]
}

DisplayTime.propTypes = {
  seconds: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
};

DisplayTime.defaultProps = {
  seconds: 0,
  size: 'medium',
  active: true,
};

export default DisplayTime;
