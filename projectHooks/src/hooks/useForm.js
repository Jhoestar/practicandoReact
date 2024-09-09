
export const useForm = () => {

    const [formstate, setformstate] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const {userName, email, password} = formstate

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setformstate({
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
