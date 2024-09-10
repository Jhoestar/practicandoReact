import { useReducer, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {

    const focusRef = useRef()

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const {userName, email, password, formstate, onInputChange}= useForm(initialForm)

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formstate)
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">user name</label>
                <input 
                type="text" 
                className="form-control" 
                name="userName" 
                placeholder="Enter email"
                value = {userName}
                onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">email</label>
                <input 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Enter email"
                value = {email}
                onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className="form-control" 
                name="password" 
                placeholder="Password"
                value = {password}
                onChange={onInputChange}
                />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary"
            >
                Submit
            </button>
    </form>
  )
}
