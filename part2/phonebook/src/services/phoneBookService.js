import axios from 'axios'
//const baseUrl = 'https://phonebook-node-backend.herokuapp.com'
const getAll = () => {
    return axios.get(`api/persons`)
        .then(resp => resp.data)
}

const getContact = (id) => {
    return axios.get(`api/persons/${id}`)
        .then(resp => resp.data)
}

const addNewContact = (contact) => {
    return axios.post(`api/persons`, contact)
    .then(resp => resp.data)
}

const deleteContact = (id) => {
    return axios.delete(`api/persons/${id}`)
    .then(resp => resp.data)
}

const updatePhoneNumber = (id,contact) => {
    return axios.put(`api/persons/${id}`, contact)
    .then(resp => resp.data)
}
export {
    getAll,
    getContact,
    addNewContact,
    deleteContact,
    updatePhoneNumber
}