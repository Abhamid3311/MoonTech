import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';
import { baseUrl } from '@/url';
import ChooseProductCard from '@/components/UI/PC Builder/ChooseProductCard';

const Motherboard = ({ data }) => {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Motherboard</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Motherboard!</h3>
            </div>

            <div className='max-w-7xl mx-auto py-5 px-5 lg:px-0'>
                {
                    data?.map(product => <ChooseProductCard key={product?.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Motherboard;



Motherboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};



export const getStaticProps = async () => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.json();
    const filteredData = data.filter(item => item.category === "Motherboard");

    return {
        props: {
            data: filteredData,
        }
    }
};