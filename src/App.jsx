import Identity from "./components/Identity/Identity"
import Avatar from "./components/Avatar/Avatar"
import Experiences from "./components/Experiences/Experiences"
import Formations from "./components/Formations/Formations"
import { dataIdentity, dataAvatar, dataExperiences, dataFormations } from "./utils/data"

import './App.css'

function App() {
  

  return (
      <main>
        <h1>CV</h1>
        <Identity {...dataIdentity}/>
        <Avatar {...dataAvatar}/>
        <Experiences exps={dataExperiences}/>
        <Formations formas={dataFormations} />
      </main>
  )
}

export default App
