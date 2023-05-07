import React from 'react'
import freeCodeCampLogo from "../imagenes/logo.svg";

const LogoFreeCodeCamp = () => (
    <div className="frecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
    </div>
)

export default LogoFreeCodeCamp