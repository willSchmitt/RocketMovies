import {Container} from './styles';

import {Header} from '../../components/Header';
import {Tags} from '../../components/Tags';

import { Link } from 'react-router-dom';

import {FiArrowLeft, FiStar, FiClock} from 'react-icons/fi'

export function Preview() {
  return (
    <Container>
    <Header />
    <main>
      <div className="infPreview">
        <Link to="/">Voltar</Link>
          <div className="titlePreview">
            <h1>A Cabana <FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></h1>
          </div>
          <div className="infAvatar">
            <img src="https://github.com/xWillSch.png" alt="Imagem do usuário" />
            <small>Por Willian Schmitt</small>
            <p><FiClock /> 24/01/23 às 08:00</p>
          </div>
      </div>
      <div className="tagsPreview">
        <Tags title="Cristão"/>
        <Tags title="Cristão"/>
        <Tags title="Cristão"/>
      </div>
      <p>O filme conta a história de Mackenzie Allen Phillips (Sam Worthington), um pai de família que tem sua filha raptada. Buscas são feitas, mas a garotinha nunca mais retorna.

Mais tarde, são encontrados indícios de que a criança foi violentada e morta em uma cabana no meio das montanhas. Assim, o protagonista entra em desespero e é tomado por uma severa depressão, questionando a existência de Deus.

Entretanto, um dia ele recebe em sua caixa de correio uma carta o convidando para voltar à cabana onde ocorreu a morte de sua filha. Mackenzie, mesmo receoso, vai até o local e lá conhece figuras extraordinárias, vivendo situações fantásticas que mudarão definitivamente sua vida.

</p>
    </main>
    </Container>
  )
}