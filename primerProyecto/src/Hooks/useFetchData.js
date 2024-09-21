import { useState,useEffect } from 'react'
import { fetchData } from '../helpers/fetchData'

export const useFetchData = (endPoint) => {
    const [dataApi, setDataApi] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const getFetch = async() =>{
        const {data,loading} = await fetchData(endPoint)
        setDataApi(data)
        setIsLoading(loading)
    }

    useEffect( ()=>{
        getFetch()
    },[endPoint])
    
  return {
    dataApi, isLoading
    }
}
