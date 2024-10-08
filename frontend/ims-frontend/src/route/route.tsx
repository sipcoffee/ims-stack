import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Signup from "../pages/Signup"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import { MainLayout } from "../layout/MainLayout"
import { Items } from "../pages/Items"
import { Inventory } from "../pages/Inventory"
import { StockManagement } from "../pages/StockManagement"
import { Supplier } from "../pages/Supplier"
import { Report } from "../pages/Report"
import { UserPage } from "../pages/UserPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Login/>,
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'inventory',
                element: <Inventory/>
            },
            {
                path: 'stocks',
                element: <StockManagement/>
            },
            {
                path: 'supplier',
                element: <Supplier/>
            },
            {
                path: 'reports',
                element: <Report/>
            },
            {
                path: 'user',
                element: <UserPage/>
            }
        ]
    }
    
  ])