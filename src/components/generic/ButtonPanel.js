/**
 * ButtonPanel handles layout of the the button set
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";
 import {STATUS} from "../../utils/helpers"

 import Button from "./Button";

 const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: yellow;
`;

 class ButtonPanel extends React.Component {
   render() {
     const {onStart, onStop, onReset, status} = this.props;
     return (
       <Container>
          <Button
            size='large'
            color='green'
            text='start'
            onClick={onStart}
          />
          <Button
            size='small'
            color='grey'
            text='stop'
            onClick={onStop}
          />
          <Button
            size='large'
            color='grey'
            text='reset'
            onClick={onReset}
          />
       </Container>
     )
   };
 }

 ButtonPanel.propTypes = {
   onStart: PropTypes.func,
   onStop: PropTypes.func,
   onPause: PropTypes.func,
   onReset: PropTypes.func,
   state: PropTypes.oneOf(STATUS),
 };

 ButtonPanel.defaultProps = {
   state: STATUS.RESET
 };

 export default ButtonPanel;
