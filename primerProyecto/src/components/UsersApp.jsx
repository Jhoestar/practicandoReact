import React, { useEffect, useState } from 'react'
import './usersApp.css'
import {UserList} from './UserList'

export const UsersApp = () => {
    const [endPoint, setEndpoint] = useState('users')

    function handleFetch(){
        setEndpoint(endPoint=='comments'?'users':'comments')
    }

  return (
    <>
        <h1>Lista de usuarios</h1>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetch}>ver {endPoint=='comments'?'users':'comments'}</button>
    </>
  )
}