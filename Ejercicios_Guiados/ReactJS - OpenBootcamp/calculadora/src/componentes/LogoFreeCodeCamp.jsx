import React from "react";
import myImage from "../imagenes/logo.svg";
import "../hojas-de-estilo/LogoFreeCodeCamp.css";

const LogoFreeCodeCamp = () => (
  <div className="freecodecamp-logo-contenedor">
    <img className="freecodecamp-logo" src={myImage} />
  </div>
);

export default LogoFreeCodeCamp;
