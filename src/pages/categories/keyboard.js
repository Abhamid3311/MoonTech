import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Keyboard() {
    return (
        <div>keyboard</div>
    )
}


Keyboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
