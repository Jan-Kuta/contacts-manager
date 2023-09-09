import { useContext, useState } from 'react'
import { Contact } from '../Contact'
import { ContactDataContext } from '../../contexts/ContactData'
import { ContactForm } from '../ContactForm/ContactForm'
import { createUser, deleteUser, updateUser } from '../../api/users'
import { UserMessageContext } from '../../contexts/UserMessage'

export type ContactType = {
  id: number
  name: string
  email: string
  phone: string
}

export type ContactTypeWithVoluntaryId = Omit<ContactType, 'id'> & { id?: number }

export const ContactList = () => {
  const { setMessage } = useContext(UserMessageContext)
  const { contacts, setContacts } = useContext(ContactDataContext)
  const [editingContact, setEditingContact] = useState<ContactTypeWithVoluntaryId | undefined>(undefined)

  const deleteContact = (id: number) => async () => {
    await deleteUser(id)
    // remove contact from global state / Context
    setContacts(contacts.filter((contact: ContactType) => contact.id !== id))
    setMessage('Contact deleted successfully')
  }

  const saveContact = (contact: ContactTypeWithVoluntaryId) => {
    if (contact.id === undefined) {
      createUser(contact)
        .then(response => response.json())
        .then(newContact => {
          // add contact to global state / Context
          setContacts([...contacts, newContact])
          setEditingContact(undefined)
          setMessage('Contact created successfully')
        })
    } else {

      updateUser(contact as ContactType)
        .then(() => {
          // update contact in global state / Context
          setContacts(contacts.map((c: ContactType) => c.id === contact?.id ? contact as ContactType : c))
          setEditingContact(undefined)
          setMessage('Contact updated successfully')
        })
    }
  }

  const selectContact = (id: number) => () => {
    setEditingContact(contacts.find((contact: ContactType) => contact.id === id))
  }

  const createContact = () => {
    setEditingContact({ name: '', email: '', phone: '' })
  }

  return (
    <>
      <dialog className="modal z-10" open={editingContact !== undefined}>
        <div className="modal-box">
          {editingContact && <ContactForm initialContactValue={editingContact} onSave={saveContact} onCancel={() => setEditingContact(undefined)} />}
        </div>
      </dialog>

      {contacts.map((contact: ContactType) => (
        <Contact key={contact.id} selectContact={selectContact(contact.id)} deleteContact={deleteContact(contact.id)} {...contact} />
      ))}

      <button onClick={createContact} className={`btn btn-lg btn-circle btn-primary  fixed bottom-4 right-4`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"/>
        </svg>
      </button>
    </>
  )
}