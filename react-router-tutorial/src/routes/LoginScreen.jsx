import React from 'react'
import { useForm } from '../Hooks/useForm'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginScreen = () => {

  
  const initialForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    redes:''
  } 
  
  const {formstate, nombre, tecnologia, email, redes, onInputChange} = useForm(initialForm)
  const {setUser} = useContext(UserContext)

  const onSubmit = (e) =>{
    e.preventDefault()
    setUser(formstate)
  }

  return (
    <>
      <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input 
          type="text" 
          className="form-control" 
          name="nombre" 
          aria-describedby="nombre"
          value={nombre}
          onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
          <input 
          type="text" 
          className="form-control" 
          name="tecnologia" 
          aria-describedby="nombre"
          value={tecnologia}
          onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
          type="text" 
          className="form-control" 
          name="email" 
          aria-describedby="nombre"
          value={email}
          onChange={onInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="redes" className="form-label">Redes</label>
          <input 
          type="text" 
          className="form-control" 
          name="redes" 
          aria-describedby="nombre"
          value={redes}
          onChange={onInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Registrar Usuario</button>
      </form>
    </>
  )
}
