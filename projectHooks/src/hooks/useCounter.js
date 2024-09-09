import { useState } from "react"

export const useCounter = (valorInicial = 0) => {
    
    const [counter, setCounter] = useState(second)
    
    const increment = (valor = 1) =>{
        setCounter(counter + valor)
    }
    const decrement = (valor = 1, negativo) =>{
        if(!negativo && counter  - valor < 0){
            setCounter(0)
            return
        }
        setCounter(counter - valor)
    }
    const reset = () =>{
        setCounter(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
