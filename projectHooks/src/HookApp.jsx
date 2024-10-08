import React from 'react'
import { CounterComponent } from './components/CounterComponent'
import { FormularioComponent } from './components/FormularioComponent'
import { UsuariosComponent } from './components/UsuariosComponent'
import { CalculosPesados } from './components/CalculosPesados'
import { CallBackComponent } from './components/CallBackComponent'
import { ListaTareas } from './components/ListaTareas'

export const HookApp = () => {
  return (
    <>
        <h1>Aplicacion de Hooks</h1>
        <hr/>
        <ListaTareas />
    </>
  )
}
