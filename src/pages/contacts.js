import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Contacts = () => {
    return (
        <div>
            Contacts
        </div>
    );
};

export default Contacts;

Contacts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };