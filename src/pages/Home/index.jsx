import {Container, Menu, Content} from './styles'
import { Header } from './../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { MovieCard } from '../../components/MovieCard'
import { Link } from 'react-router-dom'


export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Menu>
                    <h1>Meus filmes</h1>
                    <Link to="/new">+ Adicionar filme</Link>
                </Menu>
                <Content>
                    <MovieCard data={{ title: "911", text: 'Serie de emergencia', points: 3, tags: ['Tag 1', 'Tag 2', 'Tag 3']}} />
                    <MovieCard data={{ title: "911", text: 'Serie de emergencia', points: 5, tags: ['Tag 1', 'Tag 2', 'Tag 3']}} />
                    <MovieCard data={{ title: "911", text: 'Serie de emergencia', points: 3,tags: ['Tag 1', 'Tag 2', 'Tag 3']}} />
                    <MovieCard data={{ title: "911", text: 'Serie de emergencia', points: 3,tags: ['Tag 1', 'Tag 2', 'Tag 3']}} />           
                </Content>
            </main>
        </Container>
    )
}