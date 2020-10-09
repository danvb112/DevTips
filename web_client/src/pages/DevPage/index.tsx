import React from 'react'

import PageHeader from '../../components/PageHeader'

import './styles.css'

function DevPage(){
    return(
        <div id="page-dev" className="container">
            <PageHeader 
                title='E aí Dev beleza?, seja bem vindo!'
                description='Aqui você pode gerenciar suas Tips, adicionando novas ou retirando as já existentes.'
            />
        </div>
    )
}

export default DevPage;