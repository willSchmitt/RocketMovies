import { Container } from "./styles";

import {FiStar} from "react-icons/fi"; 
import {Tags} from "../../components/Tags"

export function Section ({title, ...rest}) {
  return (
  <Container {...rest}>
    <main>
    <div className="titleSection">
      <h1>{title}</h1>
      <FiStar/> <FiStar /> <FiStar /> <FiStar /> <FiStar />
    </div>
    <p>
    Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas. Anos depois da tragédia, ele recebe um chamado misterioso para retornar a esse local, onde ele vai receber uma lição de vida.
    </p>
    <div className="tagsSection">
      <Tags title="Cristão"/>
      <Tags title="a cabana"/>
      <Tags title="A cabana"/>
    </div>
    </main>
  </Container>
  )
}