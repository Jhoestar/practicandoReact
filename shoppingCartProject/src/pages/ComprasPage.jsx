import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductoContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  const handleAgregar = () => {
    
  }
  const handleQuitar = () => {
    
  }
  const handleAumentar = () => {
    
  }
  const handleDisminuir = () => {
    
  }
  const { productos } = useContext(ProductosContext)
  return (
    <>
      <h1>Compras:</h1>
      {productos.map((producto) => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
        ></Card>
      ))}
    </>
  )
}