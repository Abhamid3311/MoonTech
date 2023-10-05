import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Products = ({ data }) => {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>All Of Our Products</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Products!</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 max-w-7xl mx-auto py-10 px-5 lg:px-0'>
                {
                    data?.map(product => <ProductCard key={product?.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Products;

Products.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};



export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/products");
    const alldata = await res.json();

    return {
        props: {
            data: alldata,
        }
    }
};