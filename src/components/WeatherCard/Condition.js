import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temperature = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const WeatherCond = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  return (
    <>
      <Temperature>{props.temp} ˚C</Temperature>
      <WeatherCond>Clouds</WeatherCond>
    </>
  );
};

export default Condition;
