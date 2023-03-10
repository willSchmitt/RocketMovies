import {FiMail, FiLock} from 'react-icons/fi';

import {Container, Background} from './style';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import {Button} from '../../components/Button';

export function SignIn () {
  return (
    <Container>
      <main>
      <h1>RocketMovies</h1>
      <small>Aplicação para acompanhar tudo que assistir.</small>
      <div className="login">
      <small>Faça seu login</small>
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

        <Button title="Login"/>

        <Link to="/register">Criar conta</Link>
      </div>
      </main>
      <Background />
    </Container>
  );
}