import { Container, Avatar } from "./styles";
import {FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import {FiArrowLeft} from 'react-icons/fi';

import {Input} from '../../components/Input';
import { Button } from "../../components/Button";

import { Link } from 'react-router-dom';

export function Perfil() {
  return(
    <Container>
      <header>
      <Link to="/"><FiArrowLeft />Voltar</Link>
      </header>

      <main>
      <div className="container">
      <div className="classInput">
      <Avatar>
            <img 
            src="https://github.com/xWillSch.png" 
            alt="Foto do usuário" 
            />

            <label htmlFor="avatar">
              <FiCamera />

              <input 
                id= "avatar"
                type= "file"
              />    
            </label>
          </Avatar>
        <Input 
          placeholder = "Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder = "E-mail"
          type="text" 
          icon={FiMail}
        />
        <Input 
          placeholder = "Senha atual" 
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder = "Nova senha"
          type="password"
          icon={FiLock} 
        />
        <Button title="Salvar"/>
        </div>
        </div>
      </main>
    </Container>
  );
}