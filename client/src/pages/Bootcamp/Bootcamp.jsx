import React from "react";
import AssistanceBox from "../../components/BootcampComponents/assistanceBox";
import AssistanceModale from "../../components/BootcampComponents/assistanceModale";
import ButtonModule from "../../components/BootcampComponents/buttonModule";
import Checkpoint from "../../components/BootcampComponents/checkpoint";
import CheckpointModal from "../../components/BootcampComponents/checkpointModal";
import "./Bootcamp.css";

export const moduleArray = [
  { module: 1, themes : [
    {number: 1, theme: "Introducción a CS", id:"77jau"},
    {number: 2, theme: "JavaScript Avanzado I"},
    {number: 3, theme: "JavaScript Avanzado II"},
    {number: 4, theme: "Estructura de Datos I"},
    {number: 5, theme: "Estructura de Datos II"},
    {number: 6, theme: "Estructura de Datos III"},
    {number: 7, theme: "Algoritmos I"},
    {number: 8, theme: "Algoritmos II"},
    {number: 9, theme: "Repaso"}]},
  { module: 2, themes : [
    {number: 1, theme: "DOM Avanzado" },
    {number: 2, theme: "CSS avanzado"},
    {number: 3, theme: "ES6 selectores"},
    {number: 4, theme: "AJAX"},
    {number: 5, theme: "Módulos y Bundlers"},
    {number: 6, theme: "React-Intro"},
    {number: 7, theme: "React-Estilos"},
    {number: 8, theme: "React-Estado-LifeCycle"},
    {number: 9, theme: "React-Routing"},
    {number: 10, theme: "React-Forms"},
    {number: 11, theme: "Redux"},
    {number: 12, theme: "React-Redux"},
    {number: 13, theme: "React-Hooks"},
    {number: 14, theme: "Repaso"}]},
  { module: 3, themes : [
    {number: 1, theme: "Node JS" },
    {number: 2, theme: "Promises"},
    {number: 3, theme: "Web Server"},
    {number: 4, theme: "Advance Promises"},
    {number: 5, theme: "Express"},
    {number: 6, theme: "Testing"},
    {number: 7, theme: "Async Await"},
    {number: 8, theme: "Repaso"}]},
  { module: 4, themes : [
    {number: 1, theme: "DBMS" },
    {number: 2, theme: "SQL"},
    {number: 3, theme: "ORM"},
    {number: 4, theme: "Authentication"},
    {number: 5, theme: "Propuesta TA"},
    {number: 6, theme: "Repaso"},
    {number: 7, theme: "Kick-off Proyecto individual"}]},
  { module: 5, themes : [
    {number: 1, theme: "Proyecto individual" }]},
  { module: 6, themes : [
    {number: 1, theme: "Job Preparation Program" },
    {number: 2, theme: "CV/Resume"},
    {number: 3, theme: "Linkedin Profile"},
    {number: 4, theme: "GitHub Profile"},
    {number: 5, theme: "Job Hunting & Networking"},
    {number: 6, theme: "Postulaciones espontáneas"},
    {number: 7, theme: "Interviews"},
    {number: 8, theme: "Salary & Negotiation"},
    {number: 9, theme: "Henry Talent"},
    {number: 10, theme: "Final Project Presentation"}]},
];

const programs = [
  { program: "Foundations" },
  { program: "Front-End" },
  { program: "Back-End" },
  { program: "Data base" },
  { program: "Individual Proyect" },
  { program: "Job Preparation" },
];

const Bootcamp = () => {
  return (
    <div>
      <AssistanceModale />
      <CheckpointModal />
      <div className="container">
        <AssistanceBox />
        <Checkpoint />
      </div>
      <div>
        <ButtonModule
          programs={programs.slice(0, 6)}
          title="Bootcamp"
          data={moduleArray.slice(0, 6)}
        />
      </div>
    </div>
  );
};

export default Bootcamp;
