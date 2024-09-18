import { useState, useReducer } from "react"
import { useForm } from "../hooks/useForm"
const initialState = [{
    id: new Date().getDate(),
    tarea: 'Explicar Reducer',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREAS] agregar Tarea',
    payload: nuevaTarea
}
const editarTarea = {
    type: '[TAREAS] editar Tarea',
    payload: nuevaTarea
}
const eliminarTarea = {
    type: '[TAREAS] eliminar Tarea',
    payload: nuevaTarea
}
const borrarTarea = {
    type: '[TAREAS] borrar Tarea',
    payload: nuevaTarea
}

const types = [agregarTarea.type, editarTarea.type, eliminarTarea.type,
    borrarTarea.type
]

const tareaReducer = (state = initialState, action = {}) => {
    const isType = types.some(type => {
        console.log(type) 
        return type === action.type})
    return isType?[...state, action.payload]:state
}

console.log(tareaReducer(initialState, agregarTarea))


export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState)
    
    const {tarea,formstate, onInputChange} = useForm({tarea:''})

    const agregarTareaForm = (event) => {
        event.preventDefault()
        if(formstate.tarea == '') return 
        const tarea = {
            id: new Date().getTime(),
            tarea: formstate.tarea,
            finalizada: false
        }
        console.log(tarea)
        const action = {
            type: '[TAREAS] agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }    
    

    return (
        <>
            <form onSubmit={agregarTareaForm}>
                <div className="form-group">
                    <label>Ingresa nueva tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ingrese tarea"
                        value={tarea}
                        name="tarea"
                        onChange={onInputChange}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


            <hr />

            <ul>
                {state.map(item =>{
                    return (
                    <li key = {item.id}>{item.tarea}</li>
                )})}
            </ul>
        </>
    )
}
