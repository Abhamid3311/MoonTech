import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const { _id, name, price, img, status, individualRating, category } = product;
    const dispatch = useDispatch();

    const handleAddToCartBtn = (product) => {
        dispatch(addToCart(product))
    };


    return (
        <>

            <div className='h-full lg:h-[400px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white relative product-card w-full'>
                <div className='h-[170px] lg:h-[240px] w-full'>
                    <img src={img} alt={name} srcSet="" className='card-img ' />
                </div>

                <div className=' p-2 lg:p-3 h-full '>
                    <Link href={`/product-details/${_id}`} >
                        <h1 className="text-sm md:text-base lg:text-xl font-bold tracking-tight " >{name.slice(0, 22)}{name.length > 22 ? "..." : ""}  </h1>
                    </Link>

                    <p className='text-xs lg:text-base'>Category: {category}</p>
                    <p className='text-xs lg:text-base'>Rating: {individualRating}</p>
                    <p className='text-xs lg:text-base'>Price: <span className='text-primary text-base lg:text-lg font-bold'> {price} tk</span></p>
                    <p className='text-xs lg:text-base'>Status: {status}</p>



                    <button onClick={() => handleAddToCartBtn(product)} className='absolute right-3 bottom-5 bg-lightBg p-2 rounded-md shadow-lg product-card-cart'>
                        <Icon icon={"bx:cart-add"} className='text-xl md:2xl lg:text-3xl font-bold text-primary' />
                    </button>
                </div>


            </div>

        </>
    );
};

export default ProductCard;