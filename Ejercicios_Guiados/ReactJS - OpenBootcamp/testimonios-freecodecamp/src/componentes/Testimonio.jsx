import React from 'react'
import '../hojas-de-estilo/Testimonio.css'

export function Testimonio ({datos}) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={`/imagenes/${datos.imagen}.jpg`}
                alt={`Foto de ${datos.nombre.split(' ')[0].trim()}`}
                style={{width:'600px'}}
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{datos.nombre}</strong> en {datos.pais}</p>
                <p className='cargo-testimonio'>{datos.cargo} en <strong>{datos.empresa}</strong></p>
                <p className='texto-testimonio'>{datos.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio