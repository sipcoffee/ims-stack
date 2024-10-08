import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/HomePage.css'

export default function HomePage() {
  return (
    <div className='homepage__container'>
        <Outlet/>
    </div>
  )
}
