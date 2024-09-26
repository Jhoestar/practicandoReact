import { Children } from "react"
import { CarritoContext } from "./CarritoContext"
import { getInputAdornmentUtilityClass } from "@mui/material"

const initialState = []

export const CarritoProvider = ({children}) => {

    const [listaCompras, dispatch] = useReducser(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type:'[CARRITO] Agregar Compra',
            payload:id
        }    
    }
    const aumentarCantidad = (id) => {
        const action = {
            type:'[CARRITO] Aumentar Cantidad Compra',
            payload:id
        }    
    }
    const disminuirCantidad = (id) => {
        const action = {
            type:'[CARRITO] Disminuir Cantidad Compra',
            payload:id
        }    
    }
    const eliminarCompra = (id) => {
        const action = {
            type:'[CARRITO] Eliminar Compra',
            payload:id
        }        
    }

    const comprasReducer = (state = initialState, action = {}) => {
        switch(action.type){
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
                break;
            case '[CARRITO] Aumentar Cantidad Compra':
                
                break;
            case '[CARRITO] Disminuir Cantidad Compra':
                
                break;
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => {compra.id!==action.payload})
                break;
            default:
                return state;
        }
    }

  return (
    <CarritoContext.Provider value={{listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra}}>
        {children}
    </CarritoContext.Provider>
  )
}
