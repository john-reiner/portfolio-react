import React from 'react'
import '../styles/Skills.css'
import { Icon } from '@iconify/react';

export default function Skill(props) {
    return (
        <div className="skill">
            <p className='skill-item'>{props.name}</p>
            <span className='skill-item'>{props.icon !== undefined ? <Icon icon={props.icon}/> : <Icon icon={"logos:" + props.name} />}</span>
        </div>
    )
}
