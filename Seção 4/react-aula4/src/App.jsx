import { useState } from 'react'
import './App.css'
import ComponentCSS from './components/ComponentCSS.jsx'
import MyComponet from './components/MyComponet.jsx';

function App() {
  
  const n = 15;
  const dinamica = false;
  return (
    <>
      {/* Usando o CSS Global */}
      <h1>React com CSS</h1>
      {/* Usando o CSS do Componente */}
      <ComponentCSS/>

      {/* Usando o CSS Inline */}
      <h2 style={{color: "black", fontFamily: "arial", backgroundColor: "blue"}}>Testando CSS Inline</h2>

      {/* CSS Inline Dinamico*/}
      <h2 style={n > 10 ? {color: "black", backgroundColor: "gold"} : {backgroundColor: 'pink'}}>CSS DINAMICO</h2>

      {/* Classe Dinâmica */}

      <h2 className={dinamica ? "dinamic-class" : "classe-dinamica"}>Testando Classes dinâmicas</h2>

      {/* Modulos de CSS */}

      <MyComponet />
    </>
  )
}

export default App
