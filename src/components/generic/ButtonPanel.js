/**
 * ButtonPanel handles layout of the the button set
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";
 import { STATUS } from "../../utils/helpers"

 import Button from "./Button";

 const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
`;

 class ButtonPanel extends React.Component {

   // Change button text based on status
   getText(status) {
     switch (status) {
       case STATUS.RUNNING:
       case STATUS.RESTING:
        return 'Pause';
       case STATUS.RESET:
       case STATUS.PAUSED:
       default:
        return 'Start';
      };
   };

   render() {
     const {onClick, onReset, status} = this.props;
     return (
       <Container>
         <Button
           size='large'
           active={false}
           text='Reset'
           onClick={onReset}
         />
          <Button
            size='large'
            active={true}
            text={this.getText(status)}
            onClick={onClick}
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
