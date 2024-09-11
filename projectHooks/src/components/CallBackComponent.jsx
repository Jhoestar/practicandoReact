import React from 'react'
import { Incrementar } from './Incrementar'
import { useState } from 'react'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)
    const incrementarPadre=()=>{

        setCounter(counter+1)
    }
  return (
    <>
        <h1>Contador: {counter}</h1>
        <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
