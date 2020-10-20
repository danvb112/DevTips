import React from 'react';
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
    title: string,
    description?: string
    backTo: string,
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to={props.backTo}>
                    <img src={backIcon}/>
                </Link>
                <strong>{"<DevTips />"}</strong>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                <p>{props.description}</p>
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;