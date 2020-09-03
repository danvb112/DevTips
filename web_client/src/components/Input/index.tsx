import React from 'react';
import './style.css'

interface InputProps {
    label: string,
    name: string
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type='time' id={name} {...rest}/>
        </div>
    )
}

export default Input;