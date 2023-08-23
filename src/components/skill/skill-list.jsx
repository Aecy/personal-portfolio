import React from "react";

import {skills} from "../../lib/data.jsx";
import SkillItem from "./skill-item";

export default function SkillList () {
  return (
    <ul className="skill__container container grid">
      {skills.map((item, index) => {
        return (
          <SkillItem name={item.name} id={index} key={index} />
        )
      })}
    </ul>
  )
}