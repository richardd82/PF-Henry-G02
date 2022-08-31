import React from "react";
import "./box.css";

const asistSUp = { assistance: 90 };
const userCohort = {cohort: "FT27b"}

export default function AssistanceBox() {
  return (<div>
    Cohorte Web{userCohort.cohort}
  <div>
    <div className="box">
      <div className="position">
        <p>Asistencia al SUP</p>
        <div>
          <p>{asistSUp.assistance}%</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
    
  );
}
