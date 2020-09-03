import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export interface DevItens{
    id: number,
    avatar: string,
    name: string,
    stack: string,
    bio: string,
    cost: string,
    whatsapp: string

}

interface DevItensProps {
    devInfo: DevItens
}

const DevItem:React.FC<DevItensProps> = ({ devInfo }) => {
    return (
        <article className='Dev-item'>
            <header>
                <img src={devInfo.avatar}></img>
                <div>
                    <strong>{devInfo.name}</strong>
                    <span>{devInfo.stack}</span>
                </div>
            </header>

            <p>{devInfo.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{devInfo.cost}</strong>
                </p>
                <a 
                    target='blank'
                    href={`https://wa.me/${devInfo.whatsapp}`}
                >
                    <img src={whatsappIcon}></img>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default DevItem;