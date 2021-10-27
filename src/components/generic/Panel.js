/**
 * Panel handles layout of the timer
 * It also controls the color palette
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 import DisplayTime from "./DisplayTime";
 import DisplayRounds from "./DisplayRounds";
 import Input from "./Input";
 import ButtonPanel from "./ButtonPanel";
 import { STATUS } from "../../utils/helpers";
 import GENERIC  from "../../shared/COLOR";

 const primaryColor =  GENERIC.PANEL.DEFAULT.background;

 const PanelStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 400px;
   /* Using Gill Sans because it's fun, easy to read, and emits energy */
   font-family: "Gill Sans", sans-serif;
   background-color: ${primaryColor};
   color: ${GENERIC.PANEL.DEFAULT.color};
`;

 const InputsContainer = styled.div`
   color: ${GENERIC.PANEL.INPUT.color};
   background-color: ${GENERIC.PANEL.INPUT.background};
   padding: 40px 2px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

  const DisplayContainer = styled.div`
    background-color: ${GENERIC.PANEL.DISPLAY.background};
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const ControlsContainer = styled.div`
    background-color: ${GENERIC.PANEL.CONTROLS.background};
    padding: 20px 40px;
  `;

 class Panel extends React.Component {
   render() {
     const {inputs, displayTimes, displayRounds, onClick, onReset, status} = this.props;
     return (
       <PanelStyle>
        <InputsContainer>
          {inputs}
        </InputsContainer>
        <DisplayContainer>
          {displayTimes}
          {displayRounds}
        </DisplayContainer>
        <ControlsContainer>
          <ButtonPanel
            status={status}
            onClick={onClick}
            onReset={onReset}
          />
        </ControlsContainer>
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
   color: primaryColor,
 };

 export default Panel;
