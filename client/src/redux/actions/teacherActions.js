import axios from 'axios'

export function createClass (payload){
try {
    return async(dispatch)=>{
        const response = await axios.post('http://localhost:3002/classes/create', payload)
        return dispatch({
            type: 'CREATE_CLASS',
            payload: response.payload
        })
    }
} catch (error) {
    console.log(error)
}
}

export function getModules (){
    try {
        return async(dispatch)=> {
            const response = await axios.get('http://localhost:3002/modules')
            return dispatch({
                type: 'GET_MODULES',
                payload: response.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function getCohorts (){
    try {
        return async(dispatch)=> {
            const response = await axios.get('http://localhost:3002/cohorts')
            return dispatch({
                type: 'GET_COHORTS',
                payload: response.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}