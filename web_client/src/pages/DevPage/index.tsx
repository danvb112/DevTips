import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import PageHeader from '../../components/PageHeader'

import api from '../../server/api'

import './styles.css'

interface DevParams {
    id: string
}

interface DevTip {
    name: string;
    avatar: string;
    bio: string;
    whatsapp: string;
    stack: string;
    cost: number;
    week_day: number;
    from: number;
    to: number;
    
}

function DevPage() {

    const params = useParams<DevParams>()

    const [devTips, setDevTips] = useState<DevTip[]>([])


    useEffect( () => {
        api.get(`devs/:${params.id}`)
            .then(response => {
                console.log(response.data)
                setDevTips(response.data)
            })
    }, [params.id])

    if(!devTips) {
        return <p>Carregando...</p>
    }

    console.log(devTips)

    return (
        <div id="page-dev" className="container">
            <PageHeader
                title='E aí Dev beleza?, seja bem vindo!'
                description='Aqui você pode gerenciar suas Tips, adicionando novas ou retirando as já existentes.'
            />

            <main>
            {devTips.map(tip => {
                    return (
                        <article className='Dev-tip'>
                            <header>
                                <img src={tip.avatar}></img>
                                <div>
                                    <strong>{tip.name}</strong>
                                    <span>{tip.stack}</span>
                                </div>
                            </header>

                            <p>{tip.bio}</p>

                            <footer>
                                <p>
                                    Preço/hora
                                    <strong>{tip.cost}</strong>
                                </p>
                                {/* <a
                                    target='blank'
                                    href={`https://wa.me/${devInfo.whatsapp}`}
                                >
                                    <img src={whatsappIcon}></img>
                                    Entrar em contato
                            </a> */}
                            </footer>
                        </article>
                )})}

            <a>
                <FiPlus size={32} color="#fff" />
            </a>
            </main>
        </div>
    )
}

export default DevPage;