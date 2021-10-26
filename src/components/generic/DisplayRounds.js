import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const primaryColor = "#804A16";

const sizeMapping = {
  small: 20,
  medium: 40,
  large: 60,
};

const Container = styled.div`
`;

const Round = styled.span`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => {
    if (props.active)  return '#D4D46A'; /*'#D4B56A';*/
    return '#897BAF'; /*'#AA8839';*/
  }};
  color: #15073B;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.75);
  transform-origin: 50% 50%;
`;

const RoundGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "Round";
    padding-right:10px;
  }
`;

class DisplayRounds extends React.Component {
  render() {
    // construct the round row
    const { numRounds, curRound } = this.props;
    const dots = Array.from(Array(numRounds), (e,i)=>i+1).map(i => {
      const isCurRound = (i === curRound);
      return (
        <Round
          size={isCurRound ? sizeMapping.large : sizeMapping.medium}
          active={isCurRound}
          key={i}
        >
          {isCurRound && curRound}
        </Round>
      );
    })

    return (
      <Container>
        <RoundGroup>
          {dots}
        </RoundGroup>
      </Container>
    );
  }
}

// Class description for the docs
DisplayRounds.docs =   {
    title: 'Display rounds ',
    component: <DisplayRounds />,
    props: [
      {
        prop: 'numRounds',
        key: 'numRounds',
        description: 'The total number of rounds',
        type: 'number',
        defaultValue: '4',
      },
      {
        prop: 'curRound',
        key: 'curRound',
        description: "The number of the current round",
        type: 'number',
        defaultValue: '2',
      },
      {
        prop: 'color',
        key: 'color',
        description: "The color of the active round",
        type: "string",
        defaultValue: primaryColor,
      }
    ]
}

DisplayRounds.propTypes = {
  numRounds: PropTypes.number,
  curRound: PropTypes.number,
  color: PropTypes.string,
};

DisplayRounds.defaultProps = {
  color: primaryColor,
  curRound: 3,
  numRounds: 4,
};

export default DisplayRounds;
