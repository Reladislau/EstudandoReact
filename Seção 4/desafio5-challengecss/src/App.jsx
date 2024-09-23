
import './App.css'
import DataCars from './components/DataCars'

function App() {
  
  const CarsData = [
    {id: 1, Marca: "Honda", Ano: 1995, km: 18000},
    {id: 2, Marca: "Volvo", Ano: 2010, km: 9000},
    {id: 4, Marca: "Chevrolet", Ano: 2005, km: 28000},
    {id: 5, Marca: "Fiat", Ano: 2021, km: 0}
  ]


  
  return (
    <>
      <h1 className="Mytitle">Bem vindo ao Sistema de Carros</h1>
      {CarsData.map((car) => 
        <DataCars
        key={car.id}
        marca={car.Marca}
        ano={car.Ano}
        km={car.km}
        />)}
    </>
  )
}

export default App
