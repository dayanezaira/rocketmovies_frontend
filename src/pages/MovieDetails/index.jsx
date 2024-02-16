import {Container, Content, User} from "./style.js"
import { Header } from "../../components/Header/index.jsx"
import {Tag} from '../../components/Tag/index.jsx'
import { FaArrowLeft } from "react-icons/fa6"
import { Stars } from './../../components/Stars'
import { LuClock3 } from "react-icons/lu"

export function MovieDetails(){
  
  return(
    <Container>
      <Header />
      <main>
        <Content>
            <a href="/"><FaArrowLeft/> Voltar</a>
            
            <h1>Título <Stars/></h1>

            <User>
                <img src="https://github.com/dayanezaira.png" alt="Foto do usuário" />
                <span>Por Dayane Fernandes</span>
                <strong><LuClock3 /> 23/05/22 às 08:00</strong>
            </User>

              <div id="tags">
                <Tag></Tag>
                <Tag></Tag>
                <Tag></Tag>
              </div>
          
            <p> resumo do filme</p>

            
            <a href="/">Editar resumo</a>
            
        </Content>
      </main>

    </Container>
  )
}