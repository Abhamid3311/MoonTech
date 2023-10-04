import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const PCBuilderPage = () => {
    return (
        <div>
            PC Builder Page
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};