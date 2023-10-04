import React from 'react'
import Header from './Navbar'
import Footer from './Footer'

export default function RootLayout({ children }) {
    return (
        <div>
            <Header />
            <div className='min-h-screen max-w-7xl mx-auto'>{children}</div>
            <Footer />
        </div>
    )
}
