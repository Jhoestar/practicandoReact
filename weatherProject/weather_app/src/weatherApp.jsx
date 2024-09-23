import React, { useState } from 'react'

export const WeatherApp = () => {

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState(null)

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = '53302469c52f744b34ef99d64620681b'
    const difKelvin = 273.15
    const iconWeather = 'https://openweathermap.org/img/wn/'


    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.length > 0) {
            fetchClima()
        }
    }
    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}`)
            const data = await response.json()
            console.log(data)
            setDataWeather(data)
        } catch (e) {
            console.error('Ocurrio el siguiente problema :', e)
        }
    }


    return (
        <div className='container'>
            <h1>Aplicacion de Clima</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={handleChangeCity}
                />
                <button type="submit">Buscar</button>
            </form>
            {dataWeather&&(
                <div>
                    <h2>{dataWeather.name}</h2>
                    <p>temperatura: {parseInt(dataWeather.main.temp-difKelvin)}°C</p>
                    <p>Condicion meteorologica: {dataWeather.weather[0].description}</p>
                    <img src={`${iconWeather}${dataWeather.weather[0].icon}@2x.png`}/>
                </div>
            )}
        </div>
    )
}
