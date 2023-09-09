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
  const { contacts } = useContext(ContactDataContext)

  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </>
  )
}