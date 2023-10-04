import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const RAM = () => {
    return (
        <div>
            RAM
            RAM
        </div>
    );
};

export default RAM;

RAM.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};