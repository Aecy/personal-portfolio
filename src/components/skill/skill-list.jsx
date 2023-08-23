import React from "react";

import {skills} from "../../lib/data.jsx";
import SkillItem from "./skill-item";

export default function SkillList () {
  return (
    <ul className="skill__container container grid">
      {skills.map(({id, name}) => {
        return (
          <SkillItem name={name} id={id} />
        )
      })}
    </ul>
  )
}