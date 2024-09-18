import City from "./assets/city.jpg";
import "./App.css";
import ManageData from "./components/ManageData";
import ListRander from "./components/ListRander";
import CondicionalRander from "./components/CondicionalRander";
import ShowUsername from "./components/ShowUsername";
import { useState } from "react";
import CarDetails from "./components/carDetails";
import FragmenstsTag from "./components/FragmenstsTag";
import Children from "./components/Children";


function App() {
  //const bola = "Joaquim";
  const [username] = useState("Gustavo");
  const cars = [
    { id: 1, marca: "Ferrari", ano: 2017, cor: "Preto", newCar: true },
    { id: 2, marca: "Honda", ano: 2000, cor: "Branco", newCar: false },
    { id: 1, marca: "Tesla", ano: 2024, cor: "Cinza", newCar: true },
  ];

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

      {/*Props*/}
      <ShowUsername name={username} />

      {/*Desestruturação do Props*/}
      <CarDetails marca="Volvo" ano={2017} cor="Preto" newCar={true} />

      {/* Reaproveitamento */}

      <CarDetails marca="Ford" ano={1997} cor="Vermelho" newCar={false} />

      <CarDetails marca="Wolkswagem" ano={2020} cor="Prata" newCar={true} />

      {/* Loop de renderização */}

      {cars.map((car) => (
        <CarDetails
          marca={car.marca}
          ano={car.ano}
          cor={car.cor}
          newCar={car.newCar}
        />
      ))}

      {/* Fragemnts */}
      <FragmenstsTag propsfragent= "Testing"/>

      {/* Children Prop */}
      <Children myValue = "Testando o Valor">
        <p>Este é o conteúdo</p>
        
      </Children>

    </>
  );
}

export default App;
