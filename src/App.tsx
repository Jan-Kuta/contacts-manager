import { ContactList } from './components/ContactList'
import { Heading } from './components/Heading'
import './App.css'
import { ContactDataProvider } from './contexts/ContactData'

function App() {
  return (
    <ContactDataProvider>
      <div className="my-container">
        <Heading text="Contacts manager" />
        <ContactList />
      </div>
    </ContactDataProvider>
  )
}

export default App
