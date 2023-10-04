import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product)
    const { name, price, img, status, individualRating, category } = product;
    return (
        <>
            <Link href={"/"}>
                <div className='h-[420px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white'>
                    <div className='h-[270px] w-full'>
                        <img src={img} alt={name} srcSet="" className='  card-img' />
                    </div>

                    <div className='  p-3 h-full'>
                        <h1 className="text-2xl font-bold tracking-tight text-primary" > {name}  </h1>
                        <p>Category: {category}</p>
                        <p>Rating: {individualRating}</p>
                        <p>Price: <span className='text-primary text-lg font-bold'> {price}$</span></p>
                        <p>Status: {status}</p>

                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductCard;