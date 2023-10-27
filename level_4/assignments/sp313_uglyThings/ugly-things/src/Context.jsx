import React, {useState} from 'react'



const listContext = React.createContext()

function Context(props){
    const [uglyData, setUglyData] = useState([])

    return (
    <listContext.Provider value={{
        uglyData,
        setUglyData

    }}>
        {props.children}
    </listContext.Provider>)
}

export { Context, listContext };