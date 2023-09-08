import { Contact } from './components/Contact'
import { Heading } from './components/Heading'
import './App.css'

function App() {
  return (
    <div>
      <Heading text="Contacts manager" />
      <Contact name="Jan Kuta" email="jan.kuta@email.cz" phone="+420 123 456 789" />
      <Contact name="Jana Kutová" email="jana.kutova@email.cz" phone="+420 987 654 321" />
    </div>
  )
}

export default App
