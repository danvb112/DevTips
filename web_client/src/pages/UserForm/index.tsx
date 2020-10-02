import React from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function UserForm() {
    return (
        <div id="page-user-form" className='container'>
            <PageHeader 
                title='Bem Vindo a <DevTips />'
                description='Primeiro preencha o formulário com seus dados'
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    
                    <Input 
                        label='Nome Completo'
                        name='nome'
                        type='text'
                    />

                    <Input 
                        label='Email'
                        name='email'
                        type='text'
                    />

                    <Input 
                        label='Senha'
                        name='senha'
                        type='password'
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"  />
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type='submit'>
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
        
    )
}

export default UserForm;