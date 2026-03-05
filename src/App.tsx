import './App.css'
import ContadorSkills from './components/ContadorSkill/ContadorSkill'
import InfoBasica   from './components/InfoBasica/InfoBasica'
import Suscripcion from './components/Suscripcion/Suscripcion'

function App() {

  return (
    <>
      <InfoBasica nombre='Sonia' especialidad='Team Leader' experiencia={3}/>
      <ContadorSkills />
      <Suscripcion />
    </>
  )
}

export default App
