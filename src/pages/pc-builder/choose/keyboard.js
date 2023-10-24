import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';
import { baseUrl } from '@/url';
import ChooseProductCard from '@/components/UI/PC Builder/ChooseProductCard';

const Keyboard = ({ data }) => {
    // console.log(data);


    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Keyboard</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Keyboard!</h3>
            </div>

            <div className='max-w-7xl mx-auto py-5 px-5 lg:px-0'>
                {
                    data?.map(product => <ChooseProductCard key={product?.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Keyboard;

Keyboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export const getServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.json();
    const filteredData = data.filter(item => item.category === "Keyboard");

    return {
        props: {
            data: filteredData,
        }
    }
};