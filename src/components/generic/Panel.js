/**
 * Panel handles layout of the timer
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 import DisplayTime from "./DisplayTime";
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
     const {seconds, curSecond, inputs, displayTimes, onStart, onStop, status} = this.props;
     return (
       <PanelStyle>
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
   rounds: PropTypes.number,
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
