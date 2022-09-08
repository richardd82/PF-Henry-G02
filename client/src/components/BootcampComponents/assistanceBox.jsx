import React from "react";
import "./box.css";

const asistSUp = { assistance: 90 };
const userCohort = {cohort: "FT27b"}

function openModal() {
    document.querySelector(".modal-container").style.display = "flex"
}

export default function AssistanceBox() {
  return (<div>
    Cohorte Web{userCohort.cohort}
  <div>
    <div className="box">
      <div>
        <p>Asistencia al SUP</p>
        <div>
          <p>{asistSUp.assistance}%</p>
        </div>
        <button onClick={openModal}>ℹ️</button>
      </div>
    </div>
  </div>
  </div>
  
    
  );
}
