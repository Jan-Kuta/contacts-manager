import { useContext, useState } from 'react'
import { Contact } from '../Contact'
import { ContactDataContext } from '../../contexts/ContactData'
import { ContactForm } from '../ContactForm/ContactForm'

export type ContactType = {
  id: number
  name: string
  email: string
  phone: string
}

export type ContactTypeWithVoluntaryId = Omit<ContactType, 'id'> & { id?: number }

export const ContactList = () => {
  const { contacts, setContacts } = useContext(ContactDataContext)
  const [editingContact, setEditingContact] = useState<ContactType | undefined>(undefined)

  const deleteContact = (id: number) => () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // remove contact from global state / Context
        setContacts(contacts.filter(contact => contact.id !== id))
      })
  }

  const saveContact = (contact: ContactTypeWithVoluntaryId) => {
    if (contact.id === undefined) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(newContact => {
          // add contact to global state / Context
          setContacts([...contacts, newContact])
          setEditingContact(undefined)
        })
      return
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        // update contact in global state / Context
        setContacts(contacts.map(c => c.id === contact.id ? contact : c))
        setEditingContact(undefined)
      })
  }
  const selectContact = (id: number) => () => {
    setEditingContact(contacts.find(contact => contact.id === id))
  }

  return (
    <>
      <dialog className="modal z-10" open={editingContact !== undefined}>
        <div className="modal-box">
          {editingContact && <ContactForm initialContactValue={editingContact} onSave={saveContact} onCancel={() => setEditingContact(undefined)} />}
        </div>
      </dialog>

      {contacts.map(contact => (
        <Contact key={contact.id} selectContact={selectContact(contact.id)} deleteContact={deleteContact(contact.id)} {...contact} />
      ))}
    </>
  )
}