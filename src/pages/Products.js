import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Products = () => {
    return (
        <div >
            Products
        </div>
    );
};

export default Products;

Products.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};