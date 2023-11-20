import React, {useState} from "react";
import axios from 'axios';

import { format, subDays } from 'date-fns';


const BillContext = React.createContext()

function BillContextProvider(props){
    const yesterday = subDays(new Date(), 1);

    const [ date, setDate ] = useState("2023-11-20");

    return (
        <BillContext.Provider value={{
            date
        }}>
            { props.children }
        </BillContext.Provider>
    )
}

export { BillContext, BillContextProvider }