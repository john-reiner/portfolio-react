import React from 'react'
import {Row} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function Skill(props) {
    return (
        <Row className="skill">
            <p>{props.name}</p>
            <Icon icon={"logos:" + props.name} />
        </Row>
    )
}
