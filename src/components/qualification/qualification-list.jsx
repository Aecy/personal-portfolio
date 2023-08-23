import React from "react";

import {qualifications} from "../../lib/data.jsx";
import QualificationItem from "./qualification-item";

export default function QualificationList () {
  return (
    <div className="qualification__container container">
      <div className="qualification__sections">
        <div className="qualification__content">
          {qualifications.map((item, index) => {
            return (
              <QualificationItem item={item} key={index} index={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}