import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


type NavLinkProps = {
    color: string
}

// Define an array of link objects
const links = [
    { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon/> },
    { to: '/inventory', label: 'Inventory', icon: <InventoryIcon/> },
    { to: '/stocks', label: 'Stock Management', icon: <ShowChartIcon/> },
    { to: '/supplier', label: 'Supplier', icon: <PowerInputIcon/> },
    { to: '/reports', label: 'Reports', icon: <AssessmentIcon/> },
    { to: '/user', label: 'User Management', icon: <AccountCircleIcon/> },
];

const navStyle = (isActive: boolean): NavLinkProps => {
    return {
        color: isActive ? "var(--white)" : "black",
    }
}

export const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <h2>IMS</h2>
        <SidebarLinks/>
    </div>
  )
}


const SidebarLinks = () => {
    return(
        <div className='sidebar__links__container'>
            {links.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    style={({ isActive }) => navStyle(isActive)}
                >
                    {link.icon} {link.label}   
                </NavLink>
            ))}
        </div>
    )
}