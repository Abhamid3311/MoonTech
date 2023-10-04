import React from 'react'
import Header from './Navbar'
import Footer from './Footer'

export default function RootLayout({ children }) {
    return (
        <div className='bg-black text-white'>
            <Header />
            <div className=''>{children}</div>
            <Footer />
        </div>
    )
}
