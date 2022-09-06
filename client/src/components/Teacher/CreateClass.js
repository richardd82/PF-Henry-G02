import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { createClass, getCohorts, getModules } from '../../redux/actions/teacherActions';

export default function CreateClass (){
    const [input, setInput] = useState({
        name: '',
        lecture: '',
        lecture2: '',
        codeReview: '',
        codeReview2: '',
        description: '',
        moduleId: '',
        cohortId: ''
    })

    const modules = useSelector(state=> state.teacher.modules)
    const cohorts = useSelector(state=> state.teacher.cohorts)


    function handleChange (e){
        const {name, value} = e.target
        setInput(prev => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }

    function handleSelectModule (e){
        const {value} = e.target
        setInput(prev => {
            return {
                ...prev,
                moduleId: value
            }
        })
    }

    function handleSelectCohorts (e){
        const {value} = e.target
        setInput(prev => {
            return {
                ...prev,
                cohortId: value
            }
        })
    }

    return(
        <div>
            <h1>Subir clase</h1>
            <fom>
                <div>
                <label>Nombre: </label>
                <input type='text' name={'name'} value={input.name} placeholder={'nombre...'} onChange={(e)=> handleChange(e)}/>
                </div>

                <div>
                <label>Lecture parte 1</label>
                <input type='text' name={'leacture'} value={input.lecture} placeholder={'lecture...'} onChange={(e)=> handleChange(e)}/>
                </div>

                <div>
                <label>Lecture parte 2</label>
                <input type='text' name={'lecture2'} value={input.lecture2} placeholder={'lecture 2...'} onChange={(e)=> handleChange(e)}/>
                </div>

                <div>
                <label>Code Review parte 1</label>
                <input type='text' name={'codeReview'} value={input.codeReview} placeholder={'code review...'} onChange={(e)=> handleChange(e)}/>
                </div>

                <div>
                <label>Code Review parte 2</label>
                <input type='text' name={'codeReview2'} value={input.codeReview2} placeholder={'code review...'} onChange={(e)=> handleChange(e)}/>
                </div>

                <div>
                <label>Descripción</label>
                <textarea type='text' name={'description'} value={input.description} placeholder={'descripcion...'} onChange={(e)=> handleChange(e)}></textarea>
                </div>

                <div>
                    <label>Modulos</label>
                    <select onChange={(e)=> handleSelectModule(e)}>
                        {
                            modules && modules.map(e => {
                                return (
                                    <option value={e.id}>{e.name}</option> 
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <label>Cohortes</label>
                    <select onChange={(e)=> handleChange(e)}>
                        {
                            cohorts && cohorts.map(e => {
                                return (
                                    <option value={e.id}>{e.name}</option> 
                                )
                            })
                        }
                    </select>
                </div>
            </fom>
        </div>
    )
}