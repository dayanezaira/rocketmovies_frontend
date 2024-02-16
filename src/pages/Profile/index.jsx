import { Container, Form, Avatar} from "./styles"
import { Input } from '../../components/Input'
import {  FiMail, FiLock,FiUser, FiCamera } from 'react-icons/fi'
import { FaArrowLeft } from "react-icons/fa6"
import { Button } from '../../components/Button'
import { Link } from "react-router-dom"

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/"><FaArrowLeft/> Voltar</Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/dayanezaira.png" alt="Foto do usuário" />
                    <label htmlFor="avatar"> 
                        <FiCamera/>
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock}/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}