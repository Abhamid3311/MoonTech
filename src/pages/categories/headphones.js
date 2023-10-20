import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Headphones() {
    return (
        <div>headphones</div>
    )
}

Headphones.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};