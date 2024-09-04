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
    {
        nombre:'Instalaciones necesarios', visto: true,
    },
    {
        nombre:'Uso de vite', visto: true,
    },
    {
        nombre:'Componentes', visto: true,
    },
    {
        nombre:'Variables en JSX', visto: true,
    },
    {
        nombre:'Props', visto: true,
    },
    {
        nombre:'Eventos', visto: true,
    },
    {
        nombre:'useState', visto: true,
    },
    {
        nombre:'Redux', visto: true,
    },
    {
        nombre:'customHooks', visto: true,
    },
]
    const addTask = () => {
        const item = {
            nombre: document.getElementById('task_input').value,
            visto: !!document.getElementById('viewed_input').value
        }
        setArreglo([...arreglo, item])
    }

    const [arreglo, setArreglo] = useState(listadoSecciones)        

    return(
        <>
            <h1>Course Topic List</h1>
            <AgregarTarea></AgregarTarea>
            <ol style={styleOl}>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto= {item.visto} ></Items>)}
            </ol>
            <button onClick={addTask}>Add Task</button>
        </>
    )
} 