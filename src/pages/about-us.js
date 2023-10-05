import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const AboutUS = () => {
    return (
        <div>
            AboutUS Page
        </div>
    );
};

export default AboutUS;

AboutUS.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };