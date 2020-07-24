import React from 'react'

const WeatherIcon = ({icon_url, name}) => <img className="weather-icon" src = {icon_url} alt = {`${name}'s weather icon`}></img>

export default WeatherIcon