import { useContext } from 'react'
import { Contact } from '../Contact'
import { ContactDataContext } from '../../contexts/ContactData'

export type ContactType = {
  id: number
  name: string
  email: string
  phone: string
}

export const ContactList = () => {
  const { contacts, setContacts } = useContext(ContactDataContext)

  const deleteContact = (id: number) => () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // remove contact from global state / Context
        setContacts(contacts.filter(contact => contact.id !== id))
      })
  }

  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} deleteContact={deleteContact(contact.id)} {...contact} />
      ))}
    </>
  )
}