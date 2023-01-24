import {FiMail, FiLock, FiUser, } from 'react-icons/fi';

import {Container, Background} from './style';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import {Button} from '../../components/Button';

export function SignUp () {
  return (
    <Container>
      <main>
      <h1>RocketMovies</h1>
      <small>Aplicação para acompanhar tudo que assistir.</small>
      <div className="login">
      <small>Crie sua conta</small>
      <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
      <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>
        <Link to="/">Voltar para o login</Link>
      </div>
      </main>
      <Background />
    </Container>
  );
}