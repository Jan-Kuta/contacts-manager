import { ContactList } from './components/ContactList'
import { Heading } from './components/Heading'
import './App.css'
import { ContactDataProvider } from './contexts/ContactData'
import { UserMessageProvider } from './contexts/UserMessage'
import { UserMessage } from './components/UserMessage'

function App() {
  return (
    <UserMessageProvider>
      <ContactDataProvider>
        <div className="my-container relative">
          <UserMessage />
          <Heading text="Contacts manager" />
          <ContactList />
        </div>
      </ContactDataProvider>
    </UserMessageProvider>
  )
}

export default App
