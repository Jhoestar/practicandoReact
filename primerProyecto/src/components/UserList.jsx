import {useEffect, useState} from 'react'
import { useFetchData } from '../Hooks/useFetchData'

export const UserList = ({endPoint}) => {

    const {dataApi, isLoading} = useFetchData(endPoint)

  return (
    <>
        <ul>
            {isLoading?<p>cargando...</p>:
            endPoint=='users'? 
            dataApi.map(item => <li key={item.id}>Nombre:{item.name} Email:{item.email}</li>):
            dataApi.map(item => <li key={item.id}>Nombre:{item.name} estructura:{item.body}</li>)}
        </ul>
    </>
  )
}

