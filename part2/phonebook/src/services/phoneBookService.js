import axios from 'axios'

const getAll = () => {
    return axios.get('http://localhost:3001/persons')
        .then(resp => resp.data)
}

const getContact = (id) => {
    return axios.get(`http://localhost:3001/persons/${id}`)
        .then(resp => resp.data)
}

const addNewContact = (contact) => {
    return axios.post('http://localhost:3001/persons', contact)
    .then(resp => resp.data)
}

const deleteContact = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
    .then(resp => resp.data)
}

const updatePhoneNumber = (id,contacts) => {
    return axios.put(`http://localhost:3001/persons/${id}`, contacts)
    .then(resp => resp.data)
}
export {
    getAll,
    getContact,
    addNewContact,
    deleteContact,
    updatePhoneNumber
}