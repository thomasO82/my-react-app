import {dataIdentity,dataAvatar,dataExperiences, dataFormations} from "./utils/data"
import Identity from "./components/Identity/Identity"
import Experiences from "./components/Experiences/Experiences"
import Avatar from "./components/Avatar/Avatar"
import Formations from "./components/Formations/Formations"
import './App.css'

function App() {
  
  return (
      <main>
       <Identity {...dataIdentity}/>
       <Avatar {...dataAvatar}/>
       <Experiences exps={dataExperiences} />
       <Formations formas={dataFormations} />
      </main>
  )
}

export default App
