import React from 'react'

export default function Project(props) {
    return (
        <div onClick={() => props.handleProjectClick(props.id)}>
            {props.name}
        </div>
    )
}
