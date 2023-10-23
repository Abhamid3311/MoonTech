import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import { baseUrl } from '@/url';
import React from 'react'

export default function Mouse({ data }) {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Mouse</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Mouse!</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 max-w-7xl mx-auto py-10 px-5 lg:px-0'>
                {
                    data?.map(product => <ProductCard key={product?.id} product={product} />)
                }

            </div>
        </div>
    )
}

Mouse.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.json();
    const filteredData = data.filter(item => item.category === "Mouse");

    return {
        props: {
            data: filteredData,
        }
    }
};