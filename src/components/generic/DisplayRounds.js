import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const primaryColor = "#ffa2bf";

const sizeMapping = {
  small: 20,
  medium: 40,
  large: 60,
};

const Container = styled.div`
`;

const Dot = styled.span`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
`;

const ActiveDot = styled.span`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  opacity: 0.9;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: wobble 1s ease-in-out infinite;

  @keyframes wobble {
    0% {
      border-radius: 40%;
    }
    100% {
      border-radius: 100%;
    }
  }
`;

const DotGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "Rounds";
  }
`;

class DisplayRounds extends React.Component {
  render() {
    // construct the round row
    const { numRounds, curRound, color } = this.props;
    const dots = Array.from(Array(numRounds), (e,i)=>i+1).map(i => {
      if (i === curRound) {
        return (
          <ActiveDot size={sizeMapping.large} color={color} >{curRound}</ActiveDot>
        )
      } else {
        return (
          <Dot size={sizeMapping.medium} color={color} />
        )
      }
    })

    return (
      <Container>
        <DotGroup>
          {dots}
        </DotGroup>
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
  curRound: 2,
  numRounds: 4,
};

export default DisplayRounds;
