import React,{useEffect} from "react";
import { useState } from "react";
import { useSelector } from "react-redux";






const FormNewVideo = () =>{
    const [input, setInput] = useState()
    const module = useSelector((state) => state.modules.allModules)
    const cohort = useSelector((state) => state.cohorts.allCohorts)
    const classes = useSelector((state) => state.classes.allClasses)
    console.log(classes)
}

export default FormNewVideo;