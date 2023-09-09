import { useEffect, useState } from 'react'
import { Contact } from '../Contact'

type ContactType = {
  id: number
  name: string
  email: string
  phone: string
}

export const ContactList = () => {
  const [contacts, setContacts] = useState<ContactType[]>([])

  // called once when the component is mounted
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </>
  )
}