import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'
import Header from './Header'
import CountryList from './CountryList'
const App = () => {

    const [countries, setCountry] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    const onCountryClick = (countryName) => () => {
        const country = countries.find(c => c.name === countryName)
        setCountry([country])        
    }

    useEffect(() =>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setCountry(response.data)
        })
    },[searchTerm])
   
    return(
        <div>
            <Header title = "Country List" />
            <SearchBox searchTerm = {searchTerm} 
            onSearchTermChange = {(event) => setSearchTerm(event.target.value)}/>
            <CountryList countries = {countries} searchTerm = {searchTerm} onCountryClickHandler = {onCountryClick}/>
        </div>
    )
}

export default App