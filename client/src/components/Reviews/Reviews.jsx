import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStandUps, getCohorts, getReviews, getTodosUsuarios } from '../../redux/actions';
import Nav from '../Nav/Nav';


export default function Reviews ({user}){
    const dispatch = useDispatch()
    const cohorts = useSelector(state=> state.cohorts.allCohorts)
    const sup = useSelector(state=> state.standUps.allStandUp)
    const users = useSelector(state => state.users.allUsers)
    const reviews = useSelector(state => state.reviews.reviews)
    const [input, setInput] = useState({
        cohort: "",
        standup: [],
        review: []
      });
    
    
    useEffect(()=>{
        dispatch(getCohorts())
        dispatch(getAllStandUps())
        dispatch(getTodosUsuarios())
        dispatch(getReviews())
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

const supFiltered= sup.filter(el => el.cohortId === input.cohort)
const usersFiltered = users.filter(el => el.standupId === input.standup)
const userReviews = reviews.filter(e => e.user.standupId === input.standup)
//const newSet = [...new Set(userReviews.map(e=> e.userId))]





    return (
        <div>
            <Nav user={user}/>
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
                return (
                    <option value={e.id}>{e.name}</option>
                )
               })
            }
          </select>
          {
            usersFiltered?.map(e => {
                return (
                    <div>  
                    <h2 key={e.id}>{e.name}</h2>
                    {
                        userReviews?.map(r=> {
                            
                            if(e.id === r.userId)
                            {
                            return (
                                <div>
                                <p>
                                    {
                                        (r.rating === 1 ? '⭐' : r.rating === 2 ? '⭐⭐' : r.rating === 3 ? '⭐⭐⭐' :r.rating === 4 ? '⭐⭐⭐⭐' :r.rating === 5 ? '⭐⭐⭐⭐⭐' : '🙄')
                                    }
                                </p>
                                <textarea 
                                readOnly
                                style={{
                                    border: "1px solid black",
                                    width: "300px",
                                    resize: "none"
                                  }}>{r.comments}</textarea>
                                </div>
                            )
                            }
                        })
                    }
                    </div>
                )
            })
          }
         

        </div>
    )
}
