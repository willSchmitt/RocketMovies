import {Container} from './styles';

import {Header} from '../../components/Header';
import { Input } from '../../components/Input';
import {Button} from '../../components/Button';

import {FiArrowLeft, FiPlus, FiX} from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Create() {
  return(
    <Container>
      <Header />
      <main>
        <Link to='/'><FiArrowLeft/>Voltar </Link>
        <h1>Novo filme</h1>
        <div className="name_Note">
          <Input 
            placeholder="Título"
            type="text"
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)"
            type="text"
          />
        </div>
        <textarea id="areaText" placeholder="Observações"></textarea>

        <div className="markers">
          <h2>Marcadores</h2>
          <div className="section">
            <div className="react">
               <a href="/">React <FiX/> </a>
            </div>
            <div className="newMarker">
               <a href="/">Novo marcador <FiPlus/></a>
            </div>
          </div>
        </div>
        <div className="buttonsCreate">
          <Button className="removeMovie"title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </main>
    </Container>
  )
}