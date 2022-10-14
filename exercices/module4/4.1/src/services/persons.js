import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => {
            return response.data
        })
}

const addNumber = newObject => {
    return axios.post(baseUrl, newObject)
        .then(response => {
            return response.data
        })
}

const deleteNumber = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => {
            return response.data
        })
}

export default {
    getAll: getAll,
    addNumber: addNumber,
    deleteNumber: deleteNumber,
}