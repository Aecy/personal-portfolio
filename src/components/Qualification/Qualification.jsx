import React  from "react";

import "./qualification.css";
import Section from "../../helpers/section";
import QualificationList from "./qualification-list";

export default function Qualification () {

  return (
    <section className="qualification section" id="qualifications">

      <Section title="Mon expérience" />
      <QualificationList />

    </section>
  )
}
