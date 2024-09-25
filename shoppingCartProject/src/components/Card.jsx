import React, { useState } from 'react'
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio }) => {

    const [added, setAdded] = useState(false)

    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
            </div>

            {added ?
                <button
                type='button'
                className='boton-quitar'
                >
                    Quitar del Carrito
                </button>
                :
                <button
                type='button'
                className='boton-agregar'
                >
                    Agregar al Carrito
                </button>
            }
        </div>
    )
}
