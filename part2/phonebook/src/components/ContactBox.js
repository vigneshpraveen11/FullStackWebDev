import React from 'react'
import Contact from './Contact'


const ContactBox = ({contacts, searchTerm, onDeleteHandler }) =>{

    return(
        <div>
            {contacts.filter(cont => cont.name.toLowerCase().includes(searchTerm.toLowerCase())).map(cont => 
                <Contact key = {cont.id}  contact = {cont} onClickHandler = {onDeleteHandler(cont.id)} />
            )}
        </div>
    )
}

export default ContactBox;