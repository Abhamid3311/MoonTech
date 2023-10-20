import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function TV() {
    return (
        <div>TV</div>
    )
}

TV.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
