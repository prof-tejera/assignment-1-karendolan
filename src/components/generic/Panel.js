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
   width: 400px;
   /* Using Gill Sans because it's fun, easy to read, and emits energy */
   font-family: "Gill Sans", sans-serif;
   background-color: #897BAF; /*#2E4172; */
   color: white;
`;

 const InputsContainer = styled.div`
       padding: 40px;
`;

  const ActionContainer = styled.div`
    background-color: #433075;
    padding: 40px;
  `;

 class Panel extends React.Component {
   render() {
     const {seconds, curSecond, inputs, displayTimes, displayRounds, onStart, onStop, status} = this.props;
     return (
       <PanelStyle>
        <InputsContainer>
          {inputs}
        </InputsContainer>
        <ActionContainer>
          {displayTimes}
          {displayRounds}
          <div>
            <ButtonPanel
              status={status}
            />
          </div>
        </ActionContainer>
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
