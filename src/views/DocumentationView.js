import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

// Components to describe
import Loading from "../components/generic/Loading";
import DisplayTime from "../components/generic/DisplayTime";

// The list of components to Describe
const DocList = [Loading, DisplayTime];

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    // compomose the component elements
    const components = DocList.map(CurrComp => {
      const {title, props} = CurrComp.docs;
      return (
        <DocumentComponent
          key={title}
          title= {title}
          component= <CurrComp />
          propDocs={props}
        />
      )
    })
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          {components}
        </div>
      </Container>
    );
  }
}

export default Documentation;
