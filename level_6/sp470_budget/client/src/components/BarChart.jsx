import React, {useContext, useState, useEffect} from 'react'


import { UserContext } from '../context/UserProvider.jsx'

import { Bar } from 'react-chartjs-2'
import {Chart as Chartjs} from 'chart.js/auto'

function BarChart({chartData}) {


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



  return <Bar data={userData} />
}
export default BarChart