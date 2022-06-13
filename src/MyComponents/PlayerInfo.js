import React from "react";

import Card from "../MyComponents/Card";

// S O R R Y  F O R  H A R D C O D I N G

export default function PlayerInfo() {
  let myStyle = {
    width: "100%",
    height: "7vh",
    padding: "2vh",
    fontWeight: "bold",
    backgroundColor: "rgba(23,20,23,.1)",
  };
  return (
    <>
      <div style={myStyle}>Player details</div>
      <Card />
    </>
  );
}
