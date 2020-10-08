import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../server/api'
import { Link } from 'react-router-dom'


import Input from '../../components/Input'

import emailIcon from '../../assets/images/icons/email.svg'
import lockIcon from '../../assets/images/icons/lock.svg'
import LandingImg from '../../assets/images/landing.svg'
import Login from '../../components/Login'

import './styles.css'



function LandingLoginUser(){

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
    

    const nameProject = "<DevTips />"
    return (
        <div id="page-landing-login">
            <div id="page-landing-login-content" className="container">
                <div className="logo-login-container">
                    <h1>{nameProject}</h1>
                    <h2>Faça Seu Login e tire suas dúvidas</h2>
                </div>

                <img 
                    src={LandingImg} 
                    alt="Landing-image"
                    className='hero-image-landing'
                />

                <div className="login-container">
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
                </div>

            </div>
        </div>
    )
}

export default LandingLoginUser;

