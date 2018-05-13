import axios from 'axios'

export default class Contacts {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll () {
    return axios.get('contacts')
  }

  add (contact) {
    return axios.post('contacts', contact)
  }

  remove (id) {
    return axios.delete(`contacts/${id}`)
  }
}

export const contacts = new Contacts()