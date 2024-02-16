import { Container, Form, Background } from "./styles"
import { Input } from './../../components/Input'
import {  FiMail, FiLock,FiUser } from 'react-icons/fi'
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from './../../components/Button'
import { Link } from "react-router-dom"

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <div className="box">
                    <Input placeholder="Nome" type="text" icon={FiUser}/>
                    <Input placeholder="E-mail" type="text" icon={FiMail}/>
                    <Input placeholder="Senha" type="password" icon={FiLock}/>
                </div>
                <Button title="Cadastrar"/>
                <Link to="/"><FaArrowLeft size={18}/>Voltar para o login</Link>
            </Form>
            <Background />
        </Container>
    )
}