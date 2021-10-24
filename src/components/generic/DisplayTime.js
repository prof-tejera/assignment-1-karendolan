import React from "react";
import PropTypes from "prop-types";

class DisplayTime extends React.Component {
  render() {
    // const seconds = 7446; //2hr, 4 min, 6 secs
    const { seconds } = this.props;
    // Split the seconds into Hour :  Min : Sec
    const hour = Math.floor(seconds / (60 * 60));
    const min = Math.floor(seconds % (60 * 60) / 60);
    const sec = Math.floor(seconds % (60 * 60) % 60);
    return (
      <div>
        {('00' + hour).slice(-2)}
        :
        {('00' + min).slice(-2)}
        :
        {('00' + sec).slice(-2)}
      </div >
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
      }
    ]
}

DisplayTime.propTypes = {
  seconds: PropTypes.number,
};

DisplayTime.defaultProps = {
  seconds: 0,
};

export default DisplayTime;
