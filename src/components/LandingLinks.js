import React from 'react'
import Link from './Link'

export default function LandingLinks(props) {

    const renderLinks = () => {
        if (props.links) {
            return props.links.map(link => {
                return <Link key={link.id} name={link.name} url={link.url} />
            })
        }
    }

    return (
        <div>
            {renderLinks()}
        </div>
    )
}
