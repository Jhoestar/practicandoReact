import { useState } from "react"


export const useForm = () => {

    const [formstate, setFormstate] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const {userName, email, password} = formstate

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setFormstate({
            ...formstate,
            [name]: value
        })
    }

  return {
    ...formstate,
    formstate,
    onInputChange
  }
}
