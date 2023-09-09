import { ContactType } from '../components/ContactList/ContactList'

export const getUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users')

export const deleteUser = (id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })

export const createUser = (user: Omit<ContactType, 'id'>) =>
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

export const updateUser = (user: ContactType) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
