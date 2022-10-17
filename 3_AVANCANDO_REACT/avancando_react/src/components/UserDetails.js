
const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        
        <h1>Pessoa {id}:</h1>
        <ul>
            <li>nome={nome}</li>
            <li>idade={idade}</li>
            <li>profissao={profissao}</li>
            <li>habilitavel={idade >=18 ? " Pode tirar" : " nao pode tirar"}</li>

        </ul>
    </div>
  )
}

export default UserDetails