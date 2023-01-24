import {Container} from './styles';
 import {Input} from '../Input';

 import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <Input 
          className="inputHeader"
          placeholder="Pesquisar pelo título" 
          />
        <div className="avatar">
          <div className="avatar_Name">
            <small>Willian Schmitt</small>
            <a href="/">sair</a>
          </div>
        <Link to="perfil"><img src="https://github.com/xWillSch.png" alt="Foto do usuário" /></Link>  
        </div>
      </header>
    </Container>
  );
}