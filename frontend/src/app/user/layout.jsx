import React from 'react'
import useravbar from './usernavbar';

const Layout = ({ children }) => {
    return (
        <>
            <UserNavbar />
            {children}
        </>
    )
}

export default Layout;