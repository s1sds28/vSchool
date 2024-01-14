import React, { useContext, useState, useEffect } from 'react'

import BarChart from './BarChart.jsx'

import { UserData } from './Data.jsx'

import { UserContext } from '../context/UserProvider.jsx'

export default function Home(){

  const {accounts, getUserData} = useContext(UserContext)

  useEffect(() => {
    getUserData();
  }, []);


  
  const [userData, setUserData] = useState({
    labels:[
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: "Monthly Budget",
        data: [5,5,5,5,5,5,5,5,5,5,5,5],

      },
    ],
  })
  return <div className="App">
    <div className="">
    <BarChart chartData={userData}/>
    </div>
  </div>
}