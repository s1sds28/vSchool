
import React, {useState} from "react"

import axios from 'axios'

import { format, subDays } from 'date-fns';

const StockContext = React.createContext()



function StockContextProvider(props){

    const yesterday = subDays(new Date(), 1);
    const formattedDate = format(yesterday, 'yyyy-MM-dd');

    const [ date, setDate ] = useState("2023-10-27")

    const [ arrReviews, setArrReviews ] = useState([])

    const [ticker, setTicker] = useState("")

    const [ formData, setFormData ] = useState("")

    //https://polygon.io/docs/stocks/get_v1_open-close__stocksticker___date   Daily Open/Close

    const url = `https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=vzTzTFZejjwx0Ljay4iQCvX768Ts3Okr`


    const fetchData = (e) => {
        axios.get(url)
            .then(res => {
                setFormData(res.data);
                setArrReviews(prev => [...prev, res.data]);
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const handleDeleteCard = (symbol, from) => {
        const updatedStockCards = arrReviews.filter(card => (card.symbol !== symbol || card.from !== from))
        setArrReviews(updatedStockCards)
    };
    
    return (
        <StockContext.Provider value={{
            date,
            setDate,
            ticker, 
            setTicker,
            setFormData,
            formData,
            fetchData,
            arrReviews,
            setArrReviews,
            handleDeleteCard
        }}>
            {props.children}
        </StockContext.Provider>
    )
}

export { StockContext, StockContextProvider }