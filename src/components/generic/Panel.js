/**
 * Panel handles layout of the timer
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 import DisplayTime from "./DisplayTime";



 class Panel extends React.Component {
   render() {
     const {seconds} = this.props;
     return (
       <div>
        <DisplayTime
          seconds={seconds}
        />
       </div>
     )
   };
 }

 Panel.propTypes = {
 };

 Panel.defaultProps = {
   size: "medium",
   text: "ClickMe",
 };

 export default Panel;
