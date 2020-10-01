import React from 'react'

import Input from '../Input'

import emailIcon from '../../assets/images/icons/email.svg'
import lockIcon from '../../assets/images/icons/lock.svg'


import './styles.css'

function Login() {
    return (
        <article className='login-componnent'>
            <div className="login-title">
                <strong>Login</strong>
            </div>
            <div className="input-login">
                <img src={emailIcon} alt="email"/>
                <Input label='Email' name='email' type='text' />
                <br></br>
                <img src={lockIcon} alt="lock"/>
                <Input label='Senha' name='senha' type='text' />
            </div>
            <div className="buttons-login">
                <a>Cadastrar</a>
                <button type='submit'>Login</button>
            </div>
        </article>
    )
}

export default Login;