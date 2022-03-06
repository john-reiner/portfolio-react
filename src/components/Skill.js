import React from 'react'
import {Row} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function Skill(props) {
    return (
        <Row className="skill">
            {props.name}
            <Icon icon={"logos:" + props.name} />
        </Row>
    )
}
