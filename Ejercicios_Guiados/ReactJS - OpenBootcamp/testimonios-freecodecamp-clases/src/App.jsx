import React from "react";
import "./App.css";
import Testimonio from "./componentes/Testimonio";
import data from "./personas.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {data.map((objeto, index) => (
            <Testimonio key={index} datos={objeto} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
