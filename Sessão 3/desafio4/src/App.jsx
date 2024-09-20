import { useState } from 'react'

import './App.css'
import UserDetails from './Components/UserDetails';

function App() {
  const dadosUsuarios = [
    {id: 1, nome: "Eduardo Santoro", idade: 19, profissao: "Analista e Desenvolvedor de Sitemas"},
    {id: 2, nome: "Ricardo Moreira", idade: 17, profissao: "Aprendiz"},
    {id: 3, nome: "Joaquim Ramalho", idade: 23, profissao: "Engenheiro Ambiental"}, 
    {id: 4, nome: "Fabiano César", idade: 29, profissao: "Autonomo"}
  ];

  return (
    <>
    <h1>Bem vindo ao Sitema</h1>
     {dadosUsuarios.map((user) => (
      <UserDetails
      key={user.id}
      nome = {user.nome}
      idade = {user.idade}
      profissao = {user.profissao}
      />
     ))}
    </>
  )
}

export default App
