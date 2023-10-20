import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function GamingConsole() {
    return (
        <div>gaming-console</div>
    )
}


GamingConsole.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};