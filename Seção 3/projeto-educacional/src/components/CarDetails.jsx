const CarDetails = ({marca, cor, ano, newCar}) => {
  return (
    <>
    <hr />
    <h1>Detalhes do Carro:</h1>
    <ul>
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        
    </ul>
    
    {newCar === true ? <h4>Esse carro é novo</h4> : <h4>Esse carro é seminovo</h4>}
    {newCar && <p>Compra esse carro, pq ele é novo</p>}
    {!newCar && <p>Toma cuidado com esse carro, porque ele é seminovo</p>}
    </>
  )
}

export default CarDetails