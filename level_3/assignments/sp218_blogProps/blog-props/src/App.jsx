import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Blog from './Blog';

import data from './data'

import styles from './Blog.css'

export default function App() {
  const blog = data.map(item => {
    return (
      <div>
        <Blog 
        key={item.title}
        title={item.title}
        subTitle={item.subTitle}
        author={item.author}
        date={item.data}
/>
      </div>
      )
  })

  return (
    <div className={styles['blog']}>
      { blog }
    </div>
  )
}
