import React from "react";
import "./box.css";

export default function AssistanceModale() {
  function closeModal() {
    document.querySelector(".modal-container").style.display = "none";
  }
  document.addEventListener('keyup', function(e){ 
    if(e.key === "Escape"){
        document.querySelector(".modal-container").style.display = "none";
     }
})

  return (
    <div>
      {/* Checkpoint */}
      <div className="modal-container">
        <div className="modal">
          <p>ℹ️</p>
          <p>Asistencia del Stand Up</p>
          <p>
            Tu asistencia se calcula en función de todas las veces que hubo SUP
            y que tendrías que haber participado en el mismo. Esto incluye
            cohortes de las que hubieras migrado.
          </p>
          <p>
            (Estamos en plena transición a esta herramienta, por lo que los
            valores pueden ser inferiores a los reales, no te preocupes)
          </p>

          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}
