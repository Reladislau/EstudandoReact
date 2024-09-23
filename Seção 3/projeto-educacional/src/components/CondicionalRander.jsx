import { useState } from "react"
import TestComponent from "./TestComponent.jsx";

function CondicionalRander() {
    const [x] = useState(true);

    const [name, setName] = useState("Maria");
    const [condicao, setCondicao] = useState(true);
    

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> Se x for True, sim</p>}
        {!x && <p>Agora x é Falso</p>}

        {x ? <h2>Sou lindo</h2> : <h2>Sou Feio</h2>}

        {name === "João" ? (<div>
            <h1>Bem Vindo João</h1>
        </div>) : (<div>
            <h1>Nome não encontrado</h1>
        </div>)
        }

        <button onClick = {() => (setName("João"))}>Clique para autorizar</button>

        {condicao === true ? <TestComponent/> : (<div>
            <h1>Deu ruim KKKKKKKKKKK</h1>
        </div>)}

        <button onClick={() => (setCondicao(false))}>Dar ruim</button>
    </div>
  )
}

export default CondicionalRander