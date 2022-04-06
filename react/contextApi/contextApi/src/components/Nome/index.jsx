import { useContext } from 'react';
import {UserContext} from '../../contexts/user';
function Nome() {
  const {nome, setNome, setQtdAlunos, qtdAlunos} = useContext(UserContext);


  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {nome} </span>
      <br/>
      <br/>
      <button onClick={() => {setNome("Cristiano Ronaldo")} } >Trocar nome</button> <br/> <br/>
      <button onClick={() => {setQtdAlunos(qtdAlunos + 10)} } >Adicionar mais 10 alunos</button>
    </div>
  );
}

export default Nome;
