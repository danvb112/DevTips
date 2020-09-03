import React from 'react';
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import Input from '../../components/Input'
import DevItem from '../../components/DevItem'

import pythonIcon from '../../assets/images/icons/python.svg'

import './style.css'


function DevList(){

    const dev = {
        id: 1,
        avatar:'https://avatars1.githubusercontent.com/u/46692326?s=460&u=45213846f6c2800463f9fd34babc6ab432f4cdd9&v=4',
        name:'Daniel Bonasser',
        stack:'JavaScript',
        bio:'Iniciante na área da Programação',
        cost:'20',
        whatsapp:'998291996'
    }

    return (
        <div id='page-dev-list' className='container'>
            <PageHeader title='DevList' description='Esses São os Devs disponíveis'>
                <form id='search-devs'>
                    <Select 
                        label='Stack'
                        name='Stack'
                        options={[
                            { value: `Python`, label: 'Python' },
                            { value: 'JavaScript', label: 'JavaScript' },
                            { value: 'ReactJs', label: 'ReactJs' },
                            { value: 'NodeJs', label: 'NodeJs' },
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
                    />
                    <button type='button'>Buscar</button>
                </form>
            </PageHeader>
            
            <main>
                <DevItem 
                    devInfo={dev}
                    
                />
            </main>
        </div>
    )
}

export default DevList;