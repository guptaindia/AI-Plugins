import React from 'react'
import UserNavbar from './user-navbar';

const Layout = ({ children }) => {
    return (
        <>
            <UserNavbar/>
            {children}
        </>
    )
}

export default Layout;