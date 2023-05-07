import React from "react";
import "../hojas-de-estilo/Testimonio.css";

class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={`/imagenes/${this.props.datos.imagen}.jpg`}
          alt={`Foto de ${this.props.datos.nombre.split(" ")[0].trim()}`}
          style={{ width: "600px" }}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.datos.nombre}</strong> en{" "}
            {this.props.datos.pais}
          </p>
          <p className="cargo-testimonio">
            {this.props.datos.cargo} en{" "}
            <strong>{this.props.datos.empresa}</strong>
          </p>
          <p className="texto-testimonio">{this.props.datos.testimonio}</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;
