import { Container, Form, Background } from "./styles"
import { Input } from './../../components/Input'
import {  FiMail, FiLock } from 'react-icons/fi'
import { Button } from './../../components/Button'
import { Link } from "react-router-dom"

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <div className="box">
                    <Input placeholder="E-mail" type="text" icon={FiMail}/>
                    <Input placeholder="Senha" type="password" icon={FiLock}/>
                </div>
                <Button title="Entrar" />
                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}