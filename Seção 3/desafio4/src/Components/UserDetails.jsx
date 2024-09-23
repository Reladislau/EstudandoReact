const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <br />
      <hr />
      <h2>Informações dos usuários do sistema</h2>
      <p>Nome do Usuário: {nome}</p>
      <p>Idade do Usuário: {idade}</p>
      <p>Profissão do Usuário: {profissao}</p>
      
      {idade >= 18 ? (
        <>
          <p>Essa Pessoa pode dirigir</p>
        </>
      ) : (
        <>
          <p>Essa Pessoa não pode dirigir</p>
        </>
      )}
      <hr />
    </div>
  );
};

export default UserDetails;
