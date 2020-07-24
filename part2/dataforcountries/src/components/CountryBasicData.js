import React, { useEffect, useState } from 'react'
import Header from './Header'
import LanguagueList from './LanguageList'
import Flag from './Flag'
import Axios from 'axios'
import * as env from '../env'
import WeatherIcon from './WeatherIcon'
const CountryBasicData = ({name, capital, population, languages, flag}) => {
    const [weatherData, setWeatherData] = useState({})
    
    useEffect(() => {
        Axios.get(`http://api.weatherstack.com/current?access_key=${env.WEATHER_REST_API_KEY}&query=${capital}`)
        .then(response => {
            setWeatherData(response.data.current) 
        })
    },[capital])

    return(
        <div>
            <Header title = {name.toUpperCase()} />
            <div>
                <p>CAPITAL : {capital.toUpperCase()}</p>
                <p>POPULATION : {population}</p>
            </div>
            <div>
                <Header title = "LANGUAGES"/>
                <LanguagueList languages = {languages} />
                <Flag url = {flag} name = {name} />
            </div>
            <div>
                <Header title = {`WEATHER IN ${capital.toUpperCase()}`} />
                <p>TEMPERATURE : {weatherData.temperature} DEGREE CELSIUS</p>
                <WeatherIcon icon_url = {weatherData.weather_icons} name = {capital}/>
                <p>WIND : {weatherData.wind_speed} Kmph DIRECTION : {weatherData.wind_dir}</p>
            </div>
        </div>
    )
}

export default CountryBasicData