import React from 'react'
import { Link } from 'react-router-dom'

import LandingImg from '../../assets/images/landing.svg'
import DevIcon from '../../assets/images/icons/dev.png'
import TeacherIcon from '../../assets/images/icons/teacher.png'

import './styles.css'



function Landing(){
    
    const nameProject = "<DevTips />"
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>{nameProject}</h1>
                    <h2>A plataforma para Devs com dúvidas em uma Stack</h2>
                </div>

                <img 
                    src={LandingImg} 
                    alt="Landing-image"
                    className='hero-image'
                />

                <div className="buttons-container">
                    <Link to='/landing-login-user' className='get-tips'>
                        <img src={DevIcon} alt="developer-icon"/>
                        Pegar Dicas
                    </Link>

                    <Link to='/landing-login-dev' className='give-tips'>
                        <img src={TeacherIcon} alt="teacher-icon" />
                        Dar Dicas
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;

