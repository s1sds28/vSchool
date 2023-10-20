import React, {useState, useContext, useEffect} from 'react'

import axios from 'axios'

function UglyThings(props){

    const [uglyData, setUglyData] = useState([])


    function handleSave(props){
        console.log(Save)
    }

    function handleDelete(props){
        console.log(Delete)
    }

    function handleEdit(props){
        console.log(Edit)
    }

    
    const url = "https://api.vschool.io/steven/thing"


    useEffect(()=>{
        axios.get(url)
        .then(res => setUglyData(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log('array', uglyData)


    return(
        <>
            TEXT
        </>
    )
}


export default UglyThings;
