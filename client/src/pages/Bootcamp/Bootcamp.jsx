import React from "react";
import AssistanceBox from "../../components/BootcampComponents/assistanceBox";
import AssistanceModale from "../../components/BootcampComponents/assistanceModale";
import ButtonModule from "../../components/BootcampComponents/buttonModule";
import Checkpoint from "../../components/BootcampComponents/checkpoint";
import CheckpointModal from "../../components/BootcampComponents/checkpointModal";
import "./Bootcamp.css"

const moduleArray = [
  { module: 1 },
  { module: 2 },
  { module: 3 },
  { module: 4 },
  { module: 5 },
  { module: 6 },
];

const programs = [{program: "Foundations"}, {program: "Front-End"}, {program: "Back-End"}, {program: "Data base"},{program: "Individual Proyect"}, {program: "Job Preparation"} ]

const Bootcamp = () => {
  return (
    <div>
      <AssistanceModale/>
      <CheckpointModal/>
      <div className="container">
      <AssistanceBox />
       <Checkpoint/> 
      </div>
      <div >
      <ButtonModule  programs={programs.slice(0,4)} title="Bootcamp" data={moduleArray.slice(0, 4)} />
      </div>
      <ButtonModule programs={programs.slice(4,6)} title="Labs" data={moduleArray.slice(4, 6)} />
    </div>
  );
};

export default Bootcamp;
