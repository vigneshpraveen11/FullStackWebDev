import React, { useState, useEffect } from 'react'
import Header from './Header'
import Form from './Form'
import ContactBox from './ContactBox'
import SearchBox from './SearchBox'
import Notification from './Notification'

import * as phoneBookService from '../services/phoneBookService'

const App = () => {

    const [contacts, setContact] = useState([])
    const [newContact, setNewContact] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [sucessMessage, setSucessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        phoneBookService.getAll()
            .then(contacts => {
                setContact(contacts)
            })
    }, [contacts.length])
    const setNewContactOnChange = (event) => {
        setNewContact(event.target.value)
    }

    const setNewPhoneNumberOnChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const searchContact = (event) => {
        setSearchTerm(event.target.value)
    }

    const addNewContactOnSubmit = (event) => {
        event.preventDefault()
        let duplicateContact = contacts.find(c => c.name === newContact)
        let isEmptyPhoneOrName = phoneNumber === '' || newContact === ''
        let contact = {
            id: Math.round((Math.random()*(contacts.length*20))),
            name: newContact,
            phoneNumber
        }
        if (isEmptyPhoneOrName)
            alert(`Cannot save with empty name/phone number`)
        else {

            if (duplicateContact) {
                const saveConfirm = window
                    .confirm(`${newContact} already exists in the phonebook, do you want to update the phone number with ${phoneNumber}`)
                if (saveConfirm) {
                    let updatedContact = { ...duplicateContact, phoneNumber: phoneNumber }
                    phoneBookService.updatePhoneNumber(duplicateContact.id, updatedContact)
                    setContact(contacts.filter(cont => cont.id !== updatedContact.id).concat(updatedContact))
                }
            }
            else
                phoneBookService.addNewContact(contact)
                    .then(newContact => setContact(contacts.concat(newContact)))
                    .then(x => setSucessMessage(`Sucessfully added ${contact.name}`))
                    .then(() => setTimeout(() => {
                        setSucessMessage('')                        
                    }, 5000))
                    .catch(err => {
                        setErrorMessage(`There was an error while saving the new contact ${err}`)
                        setTimeout(() => {
                            setErrorMessage('')
                        }, 5000)
                    })
                    

            setNewContact('')
            setPhoneNumber('')            
        }
    }

    const deleteContact = (id) => () => {
        let deleteConfirm = window
            .confirm(`Are you sure that you want to delete ${contacts.find(cont => cont.id === id).name}`)
        if (deleteConfirm)
            phoneBookService.deleteContact(id)
                .then(resp => {
                    let updatedContacts = contacts.filter(cont => cont.id !== id)
                    setContact(updatedContacts)
                })
                .catch(err => 
                    setErrorMessage(` Sorry ${contacts.find(cont => cont.id === id).name} is already deleted`))
    }

    return (
        <div>
            <Header title="Phonebook" />
            {sucessMessage && <Notification message={sucessMessage} isSucess={true} />}
            {errorMessage && <Notification message={errorMessage} isSucess={false} />}
            <SearchBox handleOnSearchValueChange={searchContact} searchTerm={searchTerm} />
            
            <Header title="Add new Contact" />
            <Form handleOnNameChange={setNewContactOnChange}
                handleSubmit={addNewContactOnSubmit}
                contactValue={newContact}
                phoneNumberValue={phoneNumber}
                handleOnNumberChange={setNewPhoneNumberOnChange} />
            <Header title="Numbers" />
            <ContactBox contacts={contacts} searchTerm={searchTerm} onDeleteHandler={deleteContact} />
        </div>
    )
}

export default App