import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
                <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
                <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
            </CarritoProvider>
        </ProductosProvider>
    )
}
