import React from 'react'
import '../styles/Skills.css'
import {Col} from 'react-bootstrap'
import Skill from './Skill'

export default function SkillCategory(props) {

    const renderSkills = () => {
        return props.skills.map(skill => {
            return <Skill name={skill.name} icon={skill.icon} key={skill.id}/>
        });
    }

    return (
        <Col className="mt-4 skills-coll">
            <div className="window-container">
            <div className="window-bar">
                <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
                </div>
                <div className="window-bar-content">{props.name}</div>
            </div>
                {/* content Start */}
                <div className="skills-category-container">
                    {renderSkills()}
                </div>
                {/* {Content finish} */}
            </div>
        </Col>
    )
}
