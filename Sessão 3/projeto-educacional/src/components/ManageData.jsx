import { useState } from "react";

const ManageData = () => {

    let someData = 10;

    console.log(someData);
    
    const [number, setNumber] = useState(30);

    const decremento = () => {
      return number - 1
    }
    

    console.log(number)
  return (
    <div>
        <p>O Valor é: {someData}</p>
        <button onClick={() => (someData = 15)}>Variavel</button>

        <p>Valor: {number}</p>
        <button onClick={() => setNumber(decremento)}>UseState</button>

       

    </div>
  )
}

export default ManageData