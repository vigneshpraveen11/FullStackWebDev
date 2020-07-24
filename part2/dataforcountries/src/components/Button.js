import React from 'react'

const Button = ({name, onClickHandler}) => 
    <button onClick = {onClickHandler(name)}>show data for {name}</button>

export default Button;