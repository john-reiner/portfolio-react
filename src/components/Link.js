import React from 'react'

export default function Link(props) {
    return (
        <div>
            {props.name} (icon)
            {props.url}
        </div>
    )
}
