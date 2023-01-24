import { Container } from "./styles";
  
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import { Section } from "../../components/Section";


import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
    <main>
      <Header />
      <div className="sectionInitial">
        <h1>Meus filmes</h1>
      <Link to="/create"><Button title="Adicionar filme"/></Link>  
      </div>
    <Link to="preview">< Section className="section" 
        title="A cabana"
      />
        <Section className="section" 
        title="A cabana"
      />
        <Section className="section" 
        title="A cabana"
      />
      </Link>  
    </main>
    </Container>
  );
}