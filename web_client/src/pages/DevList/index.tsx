import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import Input from '../../components/Input'
import DevItem, { DevItens } from '../../components/DevItem'

import './style.css'
import api from '../../server/api';


function DevList(){

    const [devs, setDevs] = useState([])

    const [stack, setStack] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    async function searchDevs(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('stacks', {
            params: {
                stack,
                week_day,
                time
            }
        });

        setDevs(response.data)
    }
    

    return (
        <div id='page-dev-list' className='container'>
            <PageHeader title='DevList' description='Esses São os Devs disponíveis'>
                <form id='search-devs' onSubmit={searchDevs}>
                    <Select 
                        label='Stack'
                        name='Stack'
                        value={stack}
                        onChange={(e)=>{setStack(e.target.value)} }
                        options={[
                            { value: `Python`, label: 'Python' },
                            { value: 'JavaScript', label: 'JavaScript' },
                            { value: 'ReactJS', label: 'ReactJS' },
                            { value: 'NodeJS', label: 'NodeJS' },
                            { value: 'Java', label: 'Java' },
                            { value: 'Dart', label: 'Dart' },
                            { value: 'MySQL', label: 'MySQL' },                       
                            { value: 'Flutter', label: 'Flutter' },
                            { value: 'C++', label: 'C++' },
                            { value: 'C#', label: 'C#' },
                            { value: 'PHP', label: 'PHP' },
                        ]}
                    />

                    <Select 
                        label='Dia da semana'
                        name='week_day'
                        value={week_day}
                        onChange={(e)=> { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },                      

                        ]}
                    />
                    <Input
                        label='Hora'
                        name='time' 
                        type='time'
                        value={time}
                        onChange={(e)=> {setTime(e.target.value)}}  
                    />
                    <button type='submit'> 
                        Buscar
                     </button>
                </form>
            </PageHeader>
            
            <main>
                {devs.map((dev: DevItens) => {
                    return <DevItem key={dev.id} devInfo={dev} />
                })}

            </main>
        </div>
    )
}

export default DevList;