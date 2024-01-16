import React, {useContext, useState, useEffect} from 'react'


import { UserContext } from '../context/UserProvider.jsx'

import { Bar } from 'react-chartjs-2'
import {Chart as Chartjs} from 'chart.js/auto'

import '../css/barChart.css'

function BarChart({chartData}) {
  return <Bar data={chartData} />
}
export default BarChart