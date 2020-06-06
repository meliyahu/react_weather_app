import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
`;
const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;

const theCity = "Adelaide";

const Location = (props) => {
  return (
    <Container>
      <City>{theCity}</City>
      <Country>AU</Country>
    </Container>
  );
};

export default Location;
