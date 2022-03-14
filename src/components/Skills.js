import React from 'react';
import '../styles/Skills.css'
import { Row, Container} from 'react-bootstrap'
import SkillCategory from './SkillCategory';

export default function Skills(props) {

  const renderSkillCatagories = () => {
    return props.skills.map(skill => {
      return <SkillCategory skills={skill.skills} name={skill.category} key={skill.id}/>
    })
  }

  return (
    <div id="skills-container">
      <Container >
        <Row id="skills-row">
          {renderSkillCatagories()}
        </Row>
      </Container>
    </div>
  )
  
}
