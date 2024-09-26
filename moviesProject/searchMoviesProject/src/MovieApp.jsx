import { useState } from "react"
export const MovieApp = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const urlImg = 'https://image.tmdb.org/t/p/w500'
    const apiKey = '27f03acdc813b25583b50a0a5ee1f16a'
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${apiKey}`)
            const data = await response.json()
            setMovies(data.results)
        } catch (e) {
            console.error('ha habido un error', e)
        }
    }




    return (
        <div className='container'>
            <h1 className='title'>buscador de peliculas</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='ingrese la pelicula'
                    value={search}
                    onChange={handleInputChange}
                />
                <button type="submit" className='search-Button'>Buscar</button>
            </form>


            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={`${urlImg}${movie.poster_path}.jpg`} alt={movie.title}></img>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p> 
                    </div>
                ))
                }
            </div>
        </div>
    )
}
