import React, {useState, useContext, useEffect} from 'react'

import UglyThing from './UglyThing'

import axios from 'axios'

import {v4 as uuidv4} from 'uuid'

import { listContext } from '../Context'

function UglyThings(props){

    // useState for saving ugly data

    const { uglyData, setUglyData } = useContext(listContext)

    const url = "https://api.vschool.io/steven/thing"

    // handleDelete
    function handleDelete(id){
        setUglyData(prevState => prevState.filter(uglyThing => uglyThing._id !== id))
    }

    useEffect(()=>{
        axios.get(url)
        .then(res => setUglyData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log('Array', uglyData)


    const allUglyThings = uglyData.map((uglyThing) => {
        return (
            <UglyThing
            key={uuidv4()}
            db_id={uglyThing._id}
            title={uglyThing.title}
            description={uglyThing.description}
            imgUrl={uglyThing.imgUrl}
            handleDelete={handleDelete}
            >

            </UglyThing>
        )
    })

    return(
        <>
            { allUglyThings }
        </>
    )
}


export default UglyThings;
