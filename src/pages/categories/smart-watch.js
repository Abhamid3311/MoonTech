import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function SmartWatch() {
    return (
        <div>smart-watch</div>
    )
}


SmartWatch.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};