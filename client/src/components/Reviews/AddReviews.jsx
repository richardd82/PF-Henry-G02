import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getTodosUsuarios } from "../../redux/actions";

export default function AddReviews (){
    const dispatch = useDispatch()
    const users = useSelector(state=> state.users.users)
    const standup = useSelector(state=> state.standUps.allStandUp)
    //const reviews = useSelector(state=> state.reviews.reviews)
    useEffect(()=>{
        dispatch(getTodosUsuarios())
        dispatch(addReview())//ver que recibe en la action  en la action
    }, [dispatch])
    //estrellas: numeros de puntuacion 
    //textarea: espacio para dejar comentario
    //traigo los usuarios mapeo los usuarios relacionados al standupp 
    //mapeo standup y busco al standup del ta si el sup coincide con el id del ta 
    //si lo anterior es true mapeo a los alumnos y me traigo a los usuarios que coincidan con ese sup    
    //form titulo: nombre del alumnos , estrellitas para puntuar, comentario
    // boton submit handlesubmit  

    const usersReviewed = users.filter(el => el.standupId === standup.id)
    const ta = usersReviewed.filter(el => el.category === 'ta')
    
   // const supUsers = reviews.filter(el => el.standupId === reviews.standupId && el.usersId )
    return (
        <div>
            
                {
                    ta && ta.map(el=>  {
                        return (
                            <h3>{ta.name}</h3>
                        )
                        })
                    
                }
            
        </div>
    )
}