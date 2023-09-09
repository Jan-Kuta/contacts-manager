import { ContactList } from './components/ContactList'
import { Heading } from './components/Heading'
import './App.css'

function App() {
  return (
    <div className="my-container">
      <Heading text="Contacts manager" />
      <ContactList />
    </div>
  )
}

export default App
