import React from 'react'

const SearchBox = ({ searchTerm, onSearchTermChange }) => {
    return (
        <>
        <label>Search for a Country </label>
        <input type="text" value={searchTerm} onChange={onSearchTermChange} placeholder="Name of the Country" />
        </>
    )
}

export default SearchBox