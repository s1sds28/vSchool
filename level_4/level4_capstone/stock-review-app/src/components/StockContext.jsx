
import React, {useState} from "react"

import axios from 'axios'

const StockContext = React.createContext()

function StockContextProvider(props){
    const url = "https://api.polygon.io/v1/open-close/AAPL/2023-10-23?adjusted=true&apiKey=vzTzTFZejjwx0Ljay4iQCvX768Ts3Okr"

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    const [ arrReviews, setArrReviews ] = useState([])

    const [ formData, setFormData ] = useState({})

    const fetchData = e => {
        axios.get(url)
            .then(res => setFormData(res.data))
            .then(setArrReviews(prev => [... arrReviews, formData]))
            .catch(err => console.log(err))
    }

    console.log(arrReviews)

    return (
        <StockContext.Provider value={{
            toggleTheme: toggleTheme,
            fetchData: fetchData
        }}>
            {props.children}
        </StockContext.Provider>
    )
}

export { StockContext, StockContextProvider }