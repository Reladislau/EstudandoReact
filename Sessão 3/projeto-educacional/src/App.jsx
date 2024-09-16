import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRander from './components/ListRander'
import CondicionalRander from './components/CondicionalRander'
import ShowUsername from './components/ShowUsername'
import { useState } from 'react'

function App() {

    const bola = "Joaquim";
    const [username] = useState("Gustavo");

  return (
      <>
      <div>
        <h1>Avançando em React</h1>
      </div>

      {/*Imagem no Public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem no Assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRander />
      <CondicionalRander />
      <ShowUsername name = {username} />
      </>
  )
}

export default App
