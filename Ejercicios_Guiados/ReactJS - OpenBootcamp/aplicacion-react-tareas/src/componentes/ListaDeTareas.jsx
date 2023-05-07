import React, { useState } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaDeTareas.css";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      setTareas([tarea, ...tareas]);
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      })
    );
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea, index) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
