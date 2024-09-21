export const fetchData = async(endPoint) =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()
        return {
            data, 
            loading:false
        }
    }catch(error){
        console.log(error)
    }
}