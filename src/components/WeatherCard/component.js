import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";

const WeatherCard = (props) => {
  const red = 90;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(${red}, 200, 200), lightblue);
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
      <img className="icon" src="./images/cloudy.png" alt="Weather Icon" />
      <h1 className="temp">20 ˚C</h1>
      <h3 className="condition">Clouds</h3>
    </Card>
  );
};

export default WeatherCard;
