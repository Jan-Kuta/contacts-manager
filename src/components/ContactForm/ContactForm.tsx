import { TextInput } from './TextInput'
import { ContactType } from '../ContactList/ContactList'
import { useState } from 'react'

type Props = {
  initialContactValue: ContactType
  onSave: (contact: ContactType) => void
  onCancel: () => void
}

export const ContactForm = ({ initialContactValue, onSave, onCancel } : Props) => {
  const [contact, setContact] = useState(initialContactValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSave = () => {
    onSave(contact)
  }

  return (
    <form className="space-y-6">
      <TextInput label="Name" name="name" value={contact.name} onChange={handleInputChange} />
      <TextInput label="Email" name="email" value={contact.email} onChange={handleInputChange} />
      <TextInput label="Phone" name="phone" value={contact.phone} onChange={handleInputChange} />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}