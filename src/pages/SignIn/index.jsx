import {FiMail, FiLock} from 'react-icons/fi';

import {Container} from './style';

import { Input } from '../../components/Input';

export function SignIn () {
  return (
    <Container>
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
          placeholder="Password"
          type="password"
          icon={FiLock}
        />
      </div>
    </Container>
  );
}