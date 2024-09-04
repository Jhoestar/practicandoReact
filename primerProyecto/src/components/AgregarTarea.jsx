import React from 'react'
import '../style.css'
import { useState } from 'react'

const AgregarTarea = ({agregarTarea}) => {
    const [inputValue,setInputValue] = useState('')
    const [inputViewed,setInputViewed] = useState('')
    const onInputChange = (event) => [
        setInputValue(event.target.value)
    ]
    const onViewedChange = (viewed) => {
        setInputViewed(viewed.target.value)
    }
    function onSubmit(event){
        event.preventDefault()
        agregarTarea({nombre:inputValue, visto:inputViewed})
    }

  return (
    <div onSubmit={onSubmit} className='agregarTareas'>
        <form className='nombre_AgregarTareas'>
            <p className='nombre'>Name Task:</p>
            <input
                className='inputTask'
                type="text" 
                placeholder='ingresar el nombre de la tarea'
                value = {inputValue}
                onChange={onInputChange}
            />
        </form>
        <form className='viewed_AgregarTareas'>
            <p className='viewed'>Viewed:</p>
            <input 
                className='inputViewed'
                type="text" 
                placeholder='ingresar si la tarea ha sido vista o no'
                value = {inputViewed}
                onChange={onViewedChange}
            />
        </form>
    </div>
  )
}

export default AgregarTarea