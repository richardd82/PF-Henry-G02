import React from 'react'
import "./box.css"

export default function Checkpoint() {
    function openCheckpoint() {
        document.querySelector(".modal-containerCheckpoint").style.display = "flex"
    }

    function keyPress (e) {
        if(e.key === "Escape") {
            document.querySelector(".modal-containerCheckpoint").style.display = "none";
        }
    }
  return (<div>
      <div>
        <div onKeyDown={keyPress} onClick={openCheckpoint} className="boxCheckpoint">
          <div className="position">
            <p>Checkpoint</p>
          </div>
        </div>
      </div>
      </div>
      
  )
}



