import React from 'react'
import { Sidebar } from '../components/Sidebar'
import './MainLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

type UserMenuProps = {
    handleLogout: () => void
}

export const MainLayout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }

    return(
        <div className='mainApp__layout__container'>
            <Sidebar/>
            
            <div className='outlet__container'>
                <Outlet/>
            </div>

            <UserMenu
                handleLogout = { handleLogout }
            />
            
        </div>
    )
}

const UserMenu: React.FC<UserMenuProps> = ({handleLogout}) => {
    return(
        <div className='userMenu__container'>
            <Button
                variant='contained'
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    )
}