import React from 'react'
import './css/Header.css'

type HeaderProps = {    
    children: string
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className='header__container'>
        <h3>{children}</h3>
    </div>
  )
}
