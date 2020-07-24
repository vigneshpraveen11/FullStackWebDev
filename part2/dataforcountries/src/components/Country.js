import React from 'react'
import Button from './Button'

const Country = ({name, onCountryClickHandler}) => {
    return (
        <div>
        <p>{name}</p>
        <Button name = {name} onClickHandler = {onCountryClickHandler} />
        </div>
    )
}

export default Country