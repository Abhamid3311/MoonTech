import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Button } from 'flowbite-react';
import Link from 'next/link';

const FeaturedProdcts = ({ products }) => {
    const [randomProducts, setRandomProducts] = useState([]);


    //Get Random 6 Products
    useEffect(() => {
        const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
        const selectedProducts = shuffledProducts.slice(0, 8);
        setRandomProducts(selectedProducts);
    }, [products]);

    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Featured Products</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Product!</h3>
            </div>

            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 max-w-7xl mx-auto py-10 px-3 md:px-3 lg:px-2 place-items-center'>
                {
                    randomProducts?.map(product => <ProductCard key={product?._id} product={product} />)
                }

            </div>
            <div className='flex items-center justify-center py-4'>
                <Link href={"/Products"}> <Button color='failure' className='px-6 py-1 text-lg '>VIEW ALL</Button></Link>
            </div>


        </div>
    );
};

export default FeaturedProdcts;


