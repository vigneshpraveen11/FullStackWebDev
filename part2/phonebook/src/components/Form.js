import React from 'react'
import Button from './Button'

const Form = ({handleOnNameChange, handleOnNumberChange, handleSubmit, contactValue, phoneNumberValue}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" onChange={handleOnNameChange} 
            placeholder="Add new contact" value = {contactValue}/>
            </div>
            <div>
            <input type="text" onChange={handleOnNumberChange}
            placeholder="Add phone number" value={phoneNumberValue} />
            <Button name = "Add Contact"/>
            </div>
        </form>
    )
}

export default Form