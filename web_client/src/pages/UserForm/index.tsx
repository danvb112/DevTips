import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../server/api'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function UserForm() {

    const history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleCreateUser(e: FormEvent) {
        e.preventDefault()

        api.post('users', {
            name,
            email,
            password
        }).then(() => {
            alert('Cadastro Realizado com sucesso')
            history.push('/landing-login-user')
        }).catch(() => {
            alert('Erro ao Realizar o cadastro')
        })
    }

    return (
        <div id="page-user-form" className='container'>
            <PageHeader 
                title='Bem Vindo a <DevTips />'
                description='Primeiro preencha o formulário com seus dados'
                backTo='/landing-login-dev'
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    
                    <Input 
                        label='Nome Completo'
                        name='nome'
                        type='text'
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <Input 
                        label='Email'
                        name='email'
                        type='text'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <Input 
                        label='Senha'
                        name='senha'
                        type='password'
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"  />
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type='submit' onClick={handleCreateUser}>
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
        
    )
}

export default UserForm;