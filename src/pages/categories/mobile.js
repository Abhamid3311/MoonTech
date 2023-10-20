import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Mobile() {
    return (
        <div>mobile</div>
    )
};


Mobile.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
