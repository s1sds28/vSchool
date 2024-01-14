import React, { useContext, useState, useEffect } from 'react'

import BarChart from './BarChart.jsx'

import { UserData } from './Data.jsx'

import { UserContext } from '../context/UserProvider.jsx'

export default function Home(){

  const {accounts, getUserData} = useContext(UserContext)

  useEffect(() => {
    getUserData();
  }, []);

  const costPerMonth = accounts.reduce((sum, account) => {
    return sum += account.budgetAmount
  }, 0)

  const eachMonth = [
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
    'December'
  ]

  const [userData, setUserData] = useState({
    labels: eachMonth,
    datasets: [
      {
        label: "Costs per Month",
        data: eachMonth.map(()=> costPerMonth/12),

      },
    ],
  })
  return <div className="App">
    <div className="">
    <BarChart chartData={userData}/>
    </div>
  </div>
}