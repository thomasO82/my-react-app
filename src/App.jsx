import { useState } from 'react'
import Details from './components/Details/Details.jsx'
import BtnClick from './components/BtnClick/BtnClick.jsx'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Thomas"
  return (
      <section>
        <p>Hello, Ri7 {name}!</p>
        <Details/>
        <BtnClick/>
      </section>
      
  )
}

export default App
