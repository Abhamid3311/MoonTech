import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Checkout() {
    return (
        <div>checkout</div>
    )
}



Checkout.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};