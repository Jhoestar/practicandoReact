import React from 'react'

export const ComprasPage = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
    }
    useEffect(() => {
      return () => {
        fetchProductos()
      }
    }, [])
  return (
    <>
        <img src={productos.image} alt={productos.title} />
    </>
  )
}
