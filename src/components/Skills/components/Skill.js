import React from 'react'
import '../styles/Skills.css'
import {Row} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function Skill(props) {
    return (
        <Row className="skill">
            <p>{props.name}</p>
            {props.icon !== undefined ? <Icon icon={props.icon}/> : <Icon icon={"logos:" + props.name} />}
        </Row>
    )
}
