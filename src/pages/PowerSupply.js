import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const PowerSupply = () => {
    return (
        <div>
            PowerSupply
            PowerSupply
        </div>
    );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};