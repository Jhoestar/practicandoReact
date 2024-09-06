import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ListadoApp} from './ListadoApp'
import {UsersApp} from './components/UsersApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersApp/>
    </>
  )
}

export default App
