import React from 'react'
import {Image} from 'react-bootstrap'

import Technology from './Technology'


export default function Blog(props) {
    console.log(props)

    const getFormattedDate = date => {
        var dateArray = date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    const renderTechnologies = () => {
        if (props.technologies) {
            return props.technologies.map(technology => {
                return <Technology name={technology.name} image={technology.image}/>
            })
        }
    }

    return (
        <div className="blog">
            <div>
                <h4>{props.title}</h4>
                <p>{props.summary}</p>
                <p><small>Published: {getFormattedDate(props.date)}</small></p>
            </div>
            <div>
                {renderTechnologies()}
            </div>
            <div>
                <Image src={props.image} className="blog-image" fluid rounded />
            </div>
        </div>
    )
}
