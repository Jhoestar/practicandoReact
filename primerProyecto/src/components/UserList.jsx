import {useEffect, useState} from 'react'
import { useFetchData } from '../Hooks/useFetchData'

export const UserList = ({endPoint}) => {

    const {dataApi, isLoading} = useFetchData(endPoint)


    if(isLoading){
      return <p>cargando...</p>
    }

  return (
    <>
        <ul>
            {endPoint=='users'? 
            dataApi.map(item => <li key={item.id}>Nombre:{item.name} Email:{item.email}</li>):
            dataApi.map(item => <li key={item.id}>Nombre:{item.name} estructura:{item.body}</li>)}
        </ul>
    </>
  )
}

