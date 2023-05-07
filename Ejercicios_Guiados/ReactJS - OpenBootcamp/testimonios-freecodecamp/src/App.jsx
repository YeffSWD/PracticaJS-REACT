import React from 'react'
import './App.css'
import Testimonio from './componentes/Testimonio'
import data from './personas.json'


function App() {

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio datos={data[0]}/>
        <Testimonio datos={data[1]}/>
        <Testimonio datos={data[2]}/>
      </div>
    </div>
  )
}

export default App
