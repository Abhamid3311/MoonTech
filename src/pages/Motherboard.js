import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Motherboard = () => {
    return (
        <div>
            Motherboard
        </div>
    );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};