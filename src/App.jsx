import { useState } from 'react'
import Student from './components/Student/Student'

import './App.css'

function App() {
  let name = "Thomas"
  return (
    <>
      <section>
        <p>Hello, Ri7 {name}!</p>
        <ul>
          <Student name="Thomas" firstname="Bourgeois" avatar="https://avatars.githubusercontent.com/u/118679064?v=4" campus="Lyon" isFromRi7 favoriteLanguage="JavaScript" />
          <Student name="John" firstname="Doe" avatar="https://avatars.githubusercontent.com/u/118679064?v=4" campus="Paris" isFromRi7={true} favoriteLanguage="Python" />
          <Student name="Jane" firstname="Smith" avatar="https://avatars.githubusercontent.com/u/118679064?v=4" campus="Marseille" favoriteLanguage="Java" />
        </ul>
      </section>
  
    </>

  )
}

export default App
