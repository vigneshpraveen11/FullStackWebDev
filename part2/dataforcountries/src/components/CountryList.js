import React from 'react'
import Country from './Country'
import CountryBasicData from './CountryBasicData'

const CountryList = ({ countries, searchTerm, onCountryClickHandler }) => {    

    const countryList = countries
        .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const sizeTooBigMessage = <h2>Too Many Countries, specify another filter</h2>

    const showCountries = countries
        .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(country =>
            <Country key={country.numericCode} name={country.name} onCountryClickHandler = {onCountryClickHandler} />)
    
    const singleCountry = countryList.length === 1 ? <CountryBasicData name = {countryList[0].name} capital = {countryList[0].capital} 
    languages = {countryList[0].languages} population = {countryList[0].population}
        flag = {countryList[0].flag} /> : showCountries
    


    return (
        <div>
            {countryList.length >= 10 ? sizeTooBigMessage : singleCountry}
        </div>
    )
}

export default CountryList