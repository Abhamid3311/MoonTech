import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function PageCheckout() {
    return (
        <div>on-page-checkout</div>
    )
}


PageCheckout.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};