
import React, {useState} from "react"

import axios from 'axios'

import { format, subDays } from 'date-fns';

const StockContext = React.createContext()



function StockContextProvider(props){

    const yesterday = subDays(new Date(), 1);
    const formattedDate = format(yesterday, 'yyyy-MM-dd');

    const [ arrReviews, setArrReviews ] = useState([])

    const [ticker, setTicker] = useState("")

    const [ formData, setFormData ] = useState("")

    const url = `https://api.polygon.io/v1/open-close/${ticker}/${formattedDate}?adjusted=true&apiKey=vzTzTFZejjwx0Ljay4iQCvX768Ts3Okr`


    const fetchData = (e) => {
        axios.get(url)
            .then(res => {
                setFormData(res.data);
                setArrReviews(prev => [...prev, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <StockContext.Provider value={{
            ticker, 
            setTicker,
            setFormData,
            formData,
            fetchData,
            arrReviews,
        }}>
            {props.children}
        </StockContext.Provider>
    )
}

export { StockContext, StockContextProvider }