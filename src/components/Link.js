import React from 'react'

export default function Link(props) {
    return (
            <a href={props.address} target="_blank"><img src={props.image} alt={props.name} width="50" height="50"></img></a>
    )
}
