import React from 'react'
import Technology from './Technology'

export default function Education(props) {

    const renderTechnologies = () => {
        if (props.technologies.length > 0) {
            console.log(props.technologies)
            // props.technologies.each(technology => {
            //     console.log(technology)
            // })
        }

    }

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.end_date}</td>
            <td>{props.description}</td>
            <td>{renderTechnologies()}</td>
        </tr>
    )
}
