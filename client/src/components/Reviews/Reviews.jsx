import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStandUps, getCohorts, getTodosUsuarios } from '../../redux/actions';


//traigo reviews, usuarios 
//verifico si user coincide con el id de user que me llega con la review
//si lo anterior es true 
export default function Reviews (){
    const dispatch = useDispatch()
    const cohorts = useSelector(state=> state.cohorts.allCohorts)
    const sup = useSelector(state=> state.standUps.allStandUp)
    const users = useSelector(state => state.users.allUsers)
    const [input, setInput] = useState({
        cohort: "",
        standup: [],
      });
    
    
    useEffect(()=>{
        dispatch(getCohorts())
        dispatch(getAllStandUps())
        dispatch(getTodosUsuarios())
    }, [dispatch])


    function handleSelectCohort(e){
        setInput({
            ...input,
            cohort: e.target.value
        })
    }

    function handleSelectSup(e){
        setInput({
            ...input,
            standup: e.target.value
        })
    }
    const cohortMaped = cohorts.map(e=> e.id)
    const supFiltered= sup.map(el => el.cohortId)
const cohortsSplit = cohortMaped
const supSplit = supFiltered
//const every = cohortMaped.find(el => el === supFiltered)
//console.log(cohortsSplit[0] === supSplit[6] ? true : false);


    return (
        <div>
            <select onChange={handleSelectCohort}>
                <option>Cohorts</option>
                {
                    cohorts && cohorts.map(e => {
                        return(
                          <option value={e.id}>{e.name}</option>  
                        )
                    })
                }
            </select>
            <select onChange={handleSelectSup}>
            <option> Select Standup</option>
            {
            supFiltered?.map(e => {
               if(e === (cohortMaped.map(r=>r))){
            return (
                <option>{e.name}</option>
        )
    }})
            
            }
        
          </select>

        </div>
    )
}
