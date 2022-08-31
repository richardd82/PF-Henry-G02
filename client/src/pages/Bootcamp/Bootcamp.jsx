import React from "react";
import AssistanceBox from "../../components/BootcampComponents/assistanceBox";
import ButtonModule from "../../components/BootcampComponents/buttonModule";
import CheckpointModal from "../../components/BootcampComponents/checkpointModal";
import "./Bootcamp.css"

const moduleArray = [
  { module: 1 },
  { module: 2 },
  { module: 3 },
  { module: 4 },
  { module: 5 },
];

const Bootcamp = () => {
  return (
    <div>
      <div className="container">
      <AssistanceBox />
      <CheckpointModal/>
      </div>
      <ButtonModule title="Bootcamp" data={moduleArray.slice(0, 3)} />
      <ButtonModule title="Labs" data={moduleArray.slice(3, 5)} />
    </div>
  );
};

export default Bootcamp;
