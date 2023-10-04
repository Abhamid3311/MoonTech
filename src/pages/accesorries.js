import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Accesorries = () => {
    return (
        <div>
            Accesorries
        </div>
    );
};

export default Accesorries;

Accesorries.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};