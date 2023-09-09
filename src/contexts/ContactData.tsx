import { createContext, useEffect, useState } from 'react';
import { ContactType } from '../components/ContactList/ContactList'
import { getUsers } from '../api/users'

const ContactDataContext = createContext({contacts: [] as ContactType[], setContacts: (_data: ContactType[]) => {}});

function ContactDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ContactType[]>([]);

  // called once when the component is mounted
  useEffect(() => {
    getUsers()
      .then(response => response.json())
      .then((data: ContactType[]) => setData(data))
  }, [])

  return (
    <ContactDataContext.Provider value={{ contacts: data, setContacts: setData }}>
      {children}
    </ContactDataContext.Provider>
  );
}

export { ContactDataContext, ContactDataProvider };
