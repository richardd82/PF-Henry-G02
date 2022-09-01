import React from "react";
import "./box.css";
export default function CheckpointModal() {
  function closeCheckpoint() {
    document.querySelector(".modal-containerCheckpoint").style.display = "none";
  }

document.addEventListener('keyup', function(e){ 
    if(e.key === "Escape"){
        document.querySelector(".modal-containerCheckpoint").style.display = "none";
     }
})

  return (
    <div>
      {/* Checkpoint */}
      <div  className="modal-containerCheckpoint">
        <div className="modal">
          <p>Esto es un modal</p>
          <button onClick={closeCheckpoint} >Cerrar</button>
        </div>
      </div>
    </div>
  );
}
