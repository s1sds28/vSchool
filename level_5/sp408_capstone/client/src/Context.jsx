import React, { useState, useEffect, createContext} from "react";
import axios from 'axios';

import { format, subDays } from 'date-fns';


const BillContext = createContext()

function BillContextProvider(props){
    const [billProviders, setBillProviders] = useState([]);

    const [ bills, setBills ] = useState([])

    useEffect(() => {
        // Fetch data from the backend API
        const url = "http://localhost:9000/billProvider"
        axios.get(url)
        .then(response => setBillProviders(response.data))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        // Fetch data from the backend API
        const url = "http://localhost:9000/bills"
        axios.get(url)
        .then(response => setBills(response.data))
        .catch(error => console.error(error));
    }, []);


    return (
        <BillContext.Provider value={{
            billProviders,
            setBillProviders,
            bills,
            setBills,
        }}>
            { props.children }
        </BillContext.Provider>
    )
}

export { BillContext, BillContextProvider }