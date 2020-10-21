import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../server/api'

import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'

import Input from '../Input'

import emailIcon from '../../assets/images/icons/email.svg'
import lockIcon from '../../assets/images/icons/lock.svg'


import './styles.css'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleVerifyUser(e: FormEvent) {
        e.preventDefault()

        api.get('users', {
            params: {
                email,
                password
            }
        }).then(() => {
            history.push('/dev-list')
        }).catch(() => {
            alert("Email ou senha incorretos!")
        })
    }
    

    return (
        <article className='login-componnent'>
            <div className="login-title">
                <strong>Login</strong>
            </div>
            <div className="input-login">
                <img src={emailIcon} alt="email"/>
                <Input 
                    label='Email' 
                    name='email' 
                    type='text'
                    onChange={(e)=> {setEmail(e.target.value)}} 
                />
                <br></br>
                <img src={lockIcon} alt="lock"/>
                <Input 
                    label='Senha' 
                    name='senha' 
                    type='password' 
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <div className="buttons-login">
                <Link to='/user-form'>Cadastrar</Link>
                <button type='submit' onClick={handleVerifyUser} >Login</button>
            </div>
        </article>
    )
}

export default Login;