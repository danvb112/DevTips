import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Select from '../../components/Select';

function DevForm() {

    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from:'', to:''}
        ])
    }


    return (
       <div id="page-dev-form" className="container">
           <PageHeader 
                title='Que massa que você quer dar dicas'
                description='Primeiro passo é preencher esse formulário'
           />

           <main>
               <fieldset>
                   <legend>Seus Dados</legend>

                   <Input 
                        label='Nome Completo'
                        name='Nome'
                        type='text'
                   />

                   <Input 
                        label='Avatar'
                        name='avatar'
                        type='text'
                   />

                   <Input 
                        label='Whatsapp'
                        name='whatsapp'
                        type='text'

                   />

                   <TextArea 
                        label='Bio'
                        name='Biografia'
                   />

               </fieldset>

               <fieldset>

                <legend>Sobbre a aula</legend>

                <Select 
                    label='Stack'
                    name='Stacks'
                    options={[
                        { value: '0', label: 'JavaScript' },
                        { value: '1', label: 'ReactJS' },
                        { value: '2', label: 'NodeJS' },
                        { value: '3', label: 'React Native' },
                        { value: '4', label: 'Python' },
                        { value: '5', label: 'C++' },
                        { value: '6', label: 'C#' },                      
                        { value: '7', label: 'C' },                      
                        { value: '8', label: 'Java' },                      
                        { value: '9', label: 'Dart' },                      
                        { value: '10', label: 'Flutter' },                                        

                    ]}
                />

                <Input 
                    label='Custo Por hora de dica'
                    name='Custo'
                    type='text'
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
                   />
                   
                   <Input 
                        label='Até'
                        name='to'
                        type='time'
                   />
                           </div>
                       )
                   })} 

   
                  </fieldset>

                  <footer>
                      <p>
                          <img src={warningIcon} alt="Aviso Importante"  />
                          Importante! <br/>
                          Preencha todos os dados
                      </p>

                      <button type='submit'>
                          Salvar Cadastro
                      </button>
                  </footer>

           </main>
       </div> 
    )
}

export default DevForm;