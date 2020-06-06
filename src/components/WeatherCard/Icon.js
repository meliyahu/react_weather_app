import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Image = styled.img`
    width: 20%;
  `;
  return (
    <>
      <Image className="icon" src="./images/cloudy.png" alt="Weather Icon" />
    </>
  );
};

export default Icon;
