const Children = ({children, myValue}) => {
  return (
    <div>
        <h1>Títutlo do Componente</h1>
        {children}
        <p>Este é meu valor: {myValue}</p>
    </div>
  )
}

export default Children