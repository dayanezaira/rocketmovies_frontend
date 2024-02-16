import { Container, Form, Profile} from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    
    return(
        <Container>
                    <p>RocketMovies</p>
                <Form>
                    <form>
                        <label for="seacher">Pesquisar pelo título</label>
                        <input id="seacher" type="text" placeholder="Pesquisar pelo título"/>
                    </form>
                </Form>
                <Profile to="/profile">
                    <img src="https://github.com/dayanezaira.png" alt="Foto do usuário"/>
                    
                    <div>
                        <strong>Dayane Fernandes</strong>
                        <span>
                            <button type="button">Sair</button>
                        </span>
                    </div>
                    
                </Profile>
        </Container>
    )
}