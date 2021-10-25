/**
 * Panel handles layout of the timer
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 import DisplayTime from "./DisplayTime";
 import DisplayRounds from "./DisplayRounds";
 import Input from "./Input";
 import ButtonPanel from "./ButtonPanel";
 import {STATUS} from "../../utils/helpers"

 const PanelStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 40px;
   width: 300px;
   background-color: yellow;
`;

 const InputsContainer = styled.div`

   background-color: yellow;
`;

 class Panel extends React.Component {
   render() {
     const {seconds, curSecond, inputs, displayTimes, displayRounds, onStart, onStop, status} = this.props;
     return (
       <PanelStyle>
        {displayRounds}
        {displayTimes}
        <div>
          <ButtonPanel
            status={status}
          />
        </div>
        {inputs}
       </PanelStyle>
     )
   };
 }

 Panel.propTypes = {
   curSecond: PropTypes.number,
   totalSeconds: PropTypes.number,
   displayRound: PropTypes.arrayOf(DisplayRounds),
   displayTime: PropTypes.arrayOf(DisplayTime),
   restSeconds: PropTypes.number,
   inputs: PropTypes.arrayOf(Input),
   onStart: PropTypes.func,
   onStop: PropTypes.func,
   onPause: PropTypes.func,
   onReset: PropTypes.func,
   state: PropTypes.oneOf(STATUS),
 };

 Panel.defaultProps = {
   size: "medium",
   text: "ClickMe",
 };

 export default Panel;
