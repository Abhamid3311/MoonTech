import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const ProductCard = ({ product }) => {
    // console.log(product)
    const { _id, name, price, img, status, individualRating, category } = product;
    return (
        <>

            <div className='h-full lg:h-[400px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white relative product-card'>
                <div className='h-[240px] w-full'>
                    <img src={img} alt={name} srcSet="" className='card-img' />
                </div>

                <div className='  p-3 h-full '>
                    <Link href={`/product-details/${_id}`} >
                        <h1 className="text-lg lg:text-xl font-bold tracking-tight " > {name.slice(0, 22)}{name.length > 22 ? "..." : ""}  </h1>
                    </Link>

                    <p className='text-sm lg:text-base'>Category: {category}</p>
                    <p className='text-sm lg:text-base'>Rating: {individualRating}</p>
                    <p className='text-sm lg:text-base'>Price: <span className='text-primary text-base lg:text-lg font-bold'> {price} tk</span></p>
                    <p className='text-sm lg:text-base'>Status: {status}</p>



                    <button className='absolute right-5 bottom-5 bg-lightBg p-2 rounded-md shadow-lg product-card-cart'>
                        <Icon icon={"bx:cart-add"} className='text-3xl font-bold text-primary' />
                    </button>
                </div>


            </div>

        </>
    );
};

export default ProductCard;