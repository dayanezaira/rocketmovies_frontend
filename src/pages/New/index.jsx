import { Header } from './../../components/Header'
import { Container, Form } from "./styles"
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from './../../components/Button'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from './../../components/NoteItem'
import { Link } from 'react-router-dom';

export function New() {
    return(
        <Container>
            <Header/>  
            <main>
                <Form>
                    <header>
                        <Link to="/"><FaArrowLeft/>Voltar</Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="boxInput">
                        <input type="text" placeholder="Título"/>
                        <input type="number" min="0" max="5" maxLength="1" placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Section title="Marcadores">

                        <div className='tags'>
                            <NoteItem value="Teste-1" />
                            <NoteItem value="Novo marcador" isNew={true} />
                        </div>
                        
                    </Section>

                    <div className="buttons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>

                </Form>
            </main>        
        </Container>
    )
}