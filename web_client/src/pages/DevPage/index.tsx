import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { Link, useParams } from 'react-router-dom'
import { FiPlus, FiX } from 'react-icons/fi'

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
    dev_id: number;
    id: number;

}

function DevPage() {

    const params = useParams<DevParams>()

    const [devTips, setDevTips] = useState<DevTip[]>([])

    const diasSemana = [
        { value: 0, label: 'Domingo' },
        { value: 1, label: 'Segunda-Feira' },
        { value: 2, label: 'Terça-Feira' },
        { value: 3, label: 'Quarta-Feira' },
        { value: 4, label: 'Quinta-Feira' },
        { value: 5, label: 'Sexta-feira' },
        { value: 6, label: 'Sábado' },                      
    ]

    

    async function loadTips() {
        const response = await api.get(`/devs/${params.id}`)
        setDevTips(response.data)
        return response
    }

    async function handleDeleteTip(dev_id: number, id: number) {
        const response = await api.delete(`/stacks/${dev_id}/${id}`)

        return response.status
    }

    function convertMinutesToHour(mins: number) {
        if (mins >= 24 * 60 || mins < 0) {
            throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.");
        }
        var h = mins / 60 | 0,
            m = mins % 60 | 0;
        return moment.utc().hours(h).minutes(m).format("hh:mm A");
    }

    useEffect(() => {
        loadTips()
    }, [params.id, devTips])



    if (!devTips) {
        return <p>Carregando...</p>
    }

    console.log(devTips)

    return (
        <div id="page-dev" className="container">
            <PageHeader
                title='E aí Dev beleza?, seja bem vindo!'
                description='Aqui você pode gerenciar suas Tips, adicionando novas ou retirando as já existentes.'
                backTo='/landing-login-dev'
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
                                <p>
                                    {diasSemana.map(dia => {
                                        if(dia.value == tip.week_day) {
                                            return <strong>{dia.label}</strong>
                                        }
                                    })}
                                    <br/>
                                    Das: 
                                    <strong>{convertMinutesToHour(tip.from)}</strong>
                                    <br/>
                                    Até: 
                                    <strong>{convertMinutesToHour(tip.to)}</strong>
                                </p>
                                <p>Whatsapp:
                                    <strong>{tip.whatsapp}</strong>
                                </p>
                                <button type='submit' onClick={() => handleDeleteTip(tip.dev_id, tip.id)}>
                                    <FiX size="32" color="#ff1744" />
                                </button>
                            </footer>
                        </article>
                    )
                })}

                <Link to='/dev-form'>
                    <FiPlus size={32} color='#04D361' />
                </Link>
            </main>
        </div>
    )
}

export default DevPage;