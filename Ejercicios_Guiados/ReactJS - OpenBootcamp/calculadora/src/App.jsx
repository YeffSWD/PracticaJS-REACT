import "./App.css";
import { useState } from "react";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import LogoFreeCodeCamp from "./componentes/LogoFreeCodeCamp";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    const operators = ["+", "-", "*", "/", ".", ""];

    if (
      !(operators.includes(val) && operators.includes(input[input.length - 1]))
    ) {
      if (input == "" && /[*\/]/.test(val)) {
        alert("No puede comenzar la operacion con * o /");
      } else {
        setInput(input + val);
      }
    } else {
      setInput(input.slice(0, input.length - 1) + val);
    }
  };

  const calcularResultado = () => {
    let condicion =
      input.split(/[+-.\/]/).length === 2 && /[+-.\/]/.test(input.charAt(0));
    if (
      input.split(/[+-.\/]/).length > 1 &&
      !/[+-.\/]/.test(input.charAt(input.length - 1)) &&
      !condicion
    ) {
      setInput(`${evaluate(input)}`);
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="App">
      <LogoFreeCodeCamp />
      <div className="contenedor-calculadora">
        <div className="fila">
          <Pantalla input={input} />
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
