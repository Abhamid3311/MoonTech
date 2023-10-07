import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    // console.log(product)
    const { _id, name, price, img, status, individualRating, category } = product;
    return (
        <>
            <Link href={`/product-details/${_id}`}>
                <div className='h-full lg:h-[420px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white'>
                    <div className='h-[270px] w-full'>
                        <img src={img} alt={name} srcSet="" className='card-img' />
                    </div>

                    <div className='  p-3 h-full'>
                        <h1 className="text-lg lg:text-xl font-bold tracking-tight text-primary" > {name.slice(0, 22)}{name.length > 22 ? "..." : ""}  </h1>
                        <p className='text-sm lg:text-base'>Category: {category}</p>
                        <p className='text-sm lg:text-base'>Rating: {individualRating}</p>
                        <p className='text-sm lg:text-base'>Price: <span className='text-primary text-base lg:text-lg font-bold'> {price} tk</span></p>
                        <p className='text-sm lg:text-base'>Status: {status}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductCard;