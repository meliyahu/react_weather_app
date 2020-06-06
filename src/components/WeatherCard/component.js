import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  // let temp = 15;
  let highColor = (1 - (props.temp - 12) / 28) * 255;
  let lowColor = highColor - 150;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top,
      rgba(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition temp={props.temp} />
    </Card>
  );
};

export default WeatherCard;
