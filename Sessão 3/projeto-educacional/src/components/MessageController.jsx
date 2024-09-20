const MessageController = ({Controller}) => {

  const mensagens = ["Olá", "Olá, Tudo bem?", "Oiii"]

  return (
    <div>
      <button onClick={() => Controller(mensagens[0])}>1</button>
      <button onClick={() => Controller(mensagens[1])}>2</button>
      <button onClick={() => Controller(mensagens[2])}>3</button>
    </div>
  )
}

export default MessageController