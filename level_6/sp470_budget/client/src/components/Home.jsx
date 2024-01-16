import React, {useContext, useState, useEffect} from 'react'

import { UserContext } from '../context/UserProvider.jsx'


import BarChart from './BarChart.jsx'

import {Chart as Chartjs} from 'chart.js/auto'


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



  return <>
    <div className="monthly-chart-container">
      <BarChart chartData={userData}/>
    </div>
    <div style={{ justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
      To be continued... a report: A years breakdown of when bill are due similar to a cash flow statement
    </div>
  </>
}