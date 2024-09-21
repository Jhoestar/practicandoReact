import { useState } from "react"
import './style.css'
import AgregarTarea from "./components/AgregarTarea"

const Items=({nombre, visto}) => {
    return(
        <li>
            {nombre} 
            {visto?<span style = {{fontWeight:'bold'}}> VIEWED</span>:<span style = {{fontWeight:'bold'}}> UNSEEN</span>}
        </li>
    )
}

const styleOl= {
    textAlign: 'left'
}


export const ListadoApp = () => {

    let listadoSecciones = [
    {id: 0, nombre:'Instalaciones necesarios', visto: true,},
    {id: 1, nombre:'Uso de vite', visto: true,},
    {id: 2, nombre:'Componentes', visto: true,},
    {id: 3, nombre:'Variables en JSX', visto: true,},
    {id: 4, nombre:'Props', visto: true,},
    {id: 5, nombre:'Eventos', visto: true,},
    {id: 6, nombre:'useState', visto: true,},
    {id: 7, nombre:'Redux', visto: true,},
    {id: 8, nombre:'customHooks', visto: true,},
]
    const [arreglo, setArreglo] = useState(listadoSecciones)        
    
    const onAddTask = (value) => {
        if(!value.nombre || value.visto === null) return

        const newTask = {
            id: arreglo.length,
            nombre:value.nombre.trim(),
            visto:value.visto,
        }

        setArreglo([...arreglo, newTask])
    }


    return(
        <>
            <h1>Course Topic List</h1>
            <AgregarTarea agregarTarea = {onAddTask}></AgregarTarea>
            <ol style={styleOl}>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto= {item.visto} ></Items>)}
            </ol>
            <button onClick={onAddTask}>Add Task</button>
        </>
    )
} 