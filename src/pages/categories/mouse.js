import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Mouse() {
    return (
        <div>mouse</div>
    )
}

Mouse.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};