import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../server/api'

import './styles.css'
import { useHistory } from 'react-router-dom';

function DevForm() {

    const history = useHistory()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [stack, setStack] = useState('')
    const [cost, setCost] = useState('')
    const [password, setPassword] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function handleCreateStack(e: FormEvent) {
        e.preventDefault()

        api.post('stacks', {
            name,
            avatar,
            whatsapp,
            bio,
            stack,
            cost: Number(cost),
            schedule: scheduleItems,
            password
        }).then((response) => {
            const { dev_id } = response.data
            alert("Cadastro realizado com sucesso")
            history.push(`/dev-page/${dev_id}`)
        }).catch(() => {
            alert("Ocorreu um erro no cadastro")
        })
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updateScheduleItems);

    }


    return (
        <div id="page-dev-form" className="container">
            <PageHeader
                title='Que massa que você quer dar dicas'
                description='Primeiro passo é preencher esse formulário'
                backTo='/landing-login-dev'
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input
                        label='Nome Completo'
                        name='Nome'
                        type='text'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}

                    />

                    <Input
                        label='Avatar'
                        name='avatar'
                        type='text'
                        value={avatar}
                        onChange={(e) => { setAvatar(e.target.value) }}
                    />

                    <Input
                        label='Whatsapp'
                        name='whatsapp'
                        type='text'
                        value={whatsapp}
                        onChange={(e) => { setWhatsapp(e.target.value) }}

                    />

                    <TextArea
                        label='Bio'
                        name='Biografia'
                        value={bio}
                        onChange={(e) => { setBio(e.target.value) }}
                    />

                </fieldset>

                <fieldset>

                    <legend>Sobre a dica</legend>

                    <Select
                        label='Stack'
                        name='stacks'
                        value={stack}
                        onChange={(e) => { setStack(e.target.value) }}
                        options={[
                            { value: 'JavaScript', label: 'JavaScript' },
                            { value: 'ReactJS', label: 'ReactJS' },
                            { value: 'NodeJS', label: 'NodeJS' },
                            { value: 'React Native', label: 'React Native' },
                            { value: 'Python', label: 'Python' },
                            { value: 'C++', label: 'C++' },
                            { value: 'C#', label: 'C#' },
                            { value: 'C', label: 'C' },
                            { value: 'Java', label: 'Java' },
                            { value: 'Dart', label: 'Dart' },
                            { value: 'Flutter', label: 'Flutter' },

                        ]}
                    />

                    <Input
                        label='Custo Por hora de dica'
                        name='Custo'
                        type='text'
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horarios Disponíveis
                       <button type='button' onClick={addNewScheduleItem}>
                            + Novo horário
                       </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    label='Dia da Semana'
                                    name='week_day'
                                    value={scheduleItem.week_day}
                                    onChange={(e) => { setScheduleItemValue(index, 'week_day', e.target.value) }}
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
                                    label='Das'
                                    name='from'
                                    type='time'
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />

                                <Input
                                    label='Até'
                                    name='to'
                                    type='time'
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}

                                />
                            </div>
                        )
                    })}

                    <div className="password-confirm">
                        <legend>Senha de confirmação</legend>
                        <Input
                            label='Senha'
                            name='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>
   
        </fieldset>
        <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                Importante! <br />
                Preencha todos os dados
            </p>
                        <button type='submit' onClick={handleCreateStack}>
                            Salvar Cadastro
            </button>
                    </footer>
    </main>
    </div> 
    )
}

export default DevForm;