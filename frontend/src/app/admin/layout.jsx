import React from 'react'
import AdminNavbar from './navbar'
import AdminDashboard from './Dashboard'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <AdminDashboard>
                {children}
            </AdminDashboard>
        </>
    )
}

export default Layout