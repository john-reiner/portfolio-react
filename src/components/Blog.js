import React from 'react'
import {Image, Button} from 'react-bootstrap'

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

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="blog">
            <div>
                <Button variant="link" onClick={() => openInNewTab(props.address)} ><h4>{props.title}</h4></Button>
                <p>{props.summary}</p>
                <p><small>Published: {getFormattedDate(props.date)}</small></p>
            </div>
            <div className="blog-right">
                <div>{renderTechnologies()}</div>
                
                <Image src={props.image} className="blog-image" fluid rounded />
            </div>
        </div>
    )
}
