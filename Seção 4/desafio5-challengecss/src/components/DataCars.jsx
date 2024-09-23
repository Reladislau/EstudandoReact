import styles from './DataCars.module.css'


const DataCars = ({marca, ano, km}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Dados dos Carros: </h1>
    <p className={styles.text}>Nome da Marca: {marca}</p>
    <p className={styles.text}>Ano do carro: {ano}</p>
    <p className={styles.text}>Km Rodados: {km}</p>
    </div>
  )
}

export default DataCars