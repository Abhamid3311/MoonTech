import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Camera() {
    return (
        <div>Camera</div>
    )
}


Camera.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};