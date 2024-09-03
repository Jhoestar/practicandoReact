import React from 'react'
import '../style.css'
import { useState } from 'react'

const AgregarTarea = () => {
    let inputValue = ''
    let inputViewed = ''
    const onInputChange = (event) => [
        inputValue = (event.target.value)
    ]
    const onViewedChange = (viewed) => {
        inputViewed = (viewed.target.value)
    }
  return (
    <div className='agregarTareas'>
        <form className='nombre_AgregarTareas'>
            <p className='nombre'>Name Task:</p>
            <input
                className='inputTask' 
                type="text" 
                placeholder='ingresar el nombre de la tarea'
            />
        </form>
        <form className='viewed_AgregarTareas'>
            <p className='viewed'>Viewed:</p>
            <input 
                className='inputViewed'
                type="text" 
                placeholder='ingresar si la tarea ha sido vista o no'
            />
        </form>
    </div>
  )
}
export default AgregarTarea