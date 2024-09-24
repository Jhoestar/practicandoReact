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
    type: '[TAREAS] finalizar Tarea',
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

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        case '[TAREAS] eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
            console.log('eliminar')
        case '[TAREAS] borrar Tarea':
            //return[...state,action.payload]
            console.log('borrar')
    }
}

console.log(tareaReducer(initialState, agregarTarea))


export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formstate, onInputChange } = useForm({ tarea: '' })

    const agregarTareaForm = (event) => {
        event.preventDefault()
        if (formstate.tarea == '') return
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

    const finalizarTareaForm = ({ id }) => {
        const action = {
            type: '[TAREAS] finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] eliminar Tarea',
            payload: id
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

            <ul className="list-group">
                {state.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTareaForm(item)}
                                    style={{marginRight:'10px'}}
                                />
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarTarea(item)}
                                >
                                    Borrar
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
