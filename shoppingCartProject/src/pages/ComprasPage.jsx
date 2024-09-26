import React from 'react'
import { useState, useEffect , useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductoContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

  const {agregarCompra,eliminarCompra} = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar = (id) => {
    
  }
  const handleDisminuir = (id) => {
    
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
          handleAgregar={()=>handleAgregar(producto)}
          handleQuitar={()=>handleQuitar(producto.id)}
        ></Card>
      ))}
    </>
  )
}