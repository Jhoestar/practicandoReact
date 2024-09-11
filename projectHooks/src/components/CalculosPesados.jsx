import React, { useMemo, useState } from 'react'

export const CalculosPesados = () => {
  const getCalculo = numeros => useMemo(() =>{
    return numeros.reduce((a,b)=> a*b)
  },[numeros])

  function agregarNum(){
    setNumeros(nums => [...nums,nums[nums.length -1]+1] )
  }

  const [numeros, setNumeros] = useState([1,2,3,4,5,6,7,8,9,4,5,6])
  const [show,setShow] = useState(true)



  return (
    <>
      <h1>Calculo:</h1>
      <p>{getCalculo(numeros)}</p>
      <button className='btn btn-primary' onClick={()=>setShow(!show)}>{show? 'show': 'hide'}</button>
      <button className='btn btn-primary' onClick={()=> agregarNum()}>Agrerar Numeros</button>
    </>
  )
}
