import React from 'react'
import LandingLinks from './LandingLinks'

export default function Landing(props) {
    return (
        <div id='landing-container'>
            <h1>{props.first_name} {props.last_name}</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
            <LandingLinks links={props.links} />
        </div>

    )
}

        // <div>

        //     {props.first_name}
            
        //     

        //     
        // </div>