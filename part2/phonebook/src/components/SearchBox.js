import React from 'react'


const SearchBox = ({handleOnSearchValueChange,searchTerm}) => {
    return(
        <div>
            <input type="search" onChange = {handleOnSearchValueChange} placeholder = "Search for a contact" 
            value = {searchTerm}/>
        </div>
    )
}

export default SearchBox