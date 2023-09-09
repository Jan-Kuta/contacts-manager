import { TextInput } from './TextInput'
import { ContactTypeWithVoluntaryId } from '../ContactList/ContactList'
import { useState } from 'react'

type Props = {
  initialContactValue: ContactTypeWithVoluntaryId
  onSave: (contact: ContactTypeWithVoluntaryId) => void
  onCancel: () => void
}

export const ContactForm = ({ initialContactValue, onSave, onCancel } : Props) => {
  const [contact, setContact] = useState(initialContactValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(contact)
  }

  return (
    <form className="space-y-6" onSubmit={handleSave}>
      <TextInput label="Name" name="name" value={contact.name} onChange={handleInputChange} />
      <TextInput label="Email" name="email" value={contact.email} onChange={handleInputChange} />
      <TextInput label="Phone" name="phone" value={contact.phone} onChange={handleInputChange} />
      <div className="modal-action">
        <button type="submit" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}