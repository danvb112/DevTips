import React from 'react'
import { Link } from 'react-router-dom'

import LandingImg from '../../assets/images/landing.svg'
import Login from '../../components/Login'

import './styles.css'



function LandingLogin(){
    
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
                    <Login/>
                </div>

            </div>
        </div>
    )
}

export default LandingLogin;

