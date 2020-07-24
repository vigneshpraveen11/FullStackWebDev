import React from 'react'

const Contact = ({ contact, onClickHandler }) => {

    return (
        <div>
            <p>{contact.name}'s number is {contact.phoneNumber} <button onClick={onClickHandler}>delete</button></p>
        </div>
    )
}

export default Contact