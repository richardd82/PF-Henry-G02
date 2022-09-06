import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllLessons, getAllModules } from "../../redux/actions/bootcampActions";
import AssistanceBox from "../../components/BootcampComponents/assistanceBox";
import AssistanceModale from "../../components/BootcampComponents/assistanceModale";
import ButtonModule from "../../components/BootcampComponents/buttonModule";
import Checkpoint from "../../components/BootcampComponents/checkpoint";
import CheckpointModal from "../../components/BootcampComponents/checkpointModal";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Bootcamp.css";
import Nav from "../../components/NavBar/Nav";


const Bootcamp = ({user}) => {
  
  const dispatch = useDispatch()
  const lessons = useSelector((state) => state.bootcamp.lessons)
  const modules = useSelector((state) => state.bootcamp.modules)

useEffect(() =>{
  dispatch(getAllModules())
  dispatch(getAllLessons())
}, [])

  if(modules){
    return (
      <div>
      <Nav user={user}/>
        <AssistanceModale />
        <CheckpointModal />
        <div className="">
          <AssistanceBox />
          <Checkpoint />
        </div>
        {/* <div> */}
          {/* <ButtonModule */}
            {/* modules={modules} */}
            {/* title="Bootcamp" */}
            {/* data={lessons} */}
          {/* /> */}
          {/* <SearchBar data={lessons}/> */}
        {/* </div> */}
      </div>
    );
  }
  return (
    <div>Cargando</div>
  )
};

export default Bootcamp;
