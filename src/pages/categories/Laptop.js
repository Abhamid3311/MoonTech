import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Laptop() {
    return (
        <div>Laptop</div>
    )
};

Laptop.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
