import React from 'react'

import "./skill.css"
import Section from "../../helpers/section.jsx";
import SkillList from "./skill-list";

export default function Skill () {

  return (
    <section className="skill section" id="skills">

      <Section title="Mon expérience" />
      <SkillList />

    </section>
  )
}
