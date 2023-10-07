import { addToBuilder } from '@/redux/features/pcBuilder/pcBuilderSlice';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const ChooseProductCard = ({ product }) => {
    const { _id, name, price, img, status, individualRating, category } = product;
    const dispatch = useDispatch();
    const router = useRouter();

    const handleChooseBuilderProduct = (product) => {
        // console.log(product);
        dispatch(addToBuilder(product));
        router.push("/pc-builder")
    };


    return (
        <>
            <div className='max-w-4xl mx-auto overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white my-3 overf'>
                <div className='flex items-center justify-between gap-2 w-full p-3'>
                    <div className='flex items-center  gap-2'>
                        <Image src={img} alt={name} width={100} height={200} srcSet="" />

                        <div className='  p-3 h-full'>
                            <Link href={`/product-details/${_id}`} ><h1 className="text-lg lg:text-xl font-bold tracking-tight text-primary hover:underline " > {name} </h1></Link>
                            <p className='text-sm lg:text-base'>Category: {category}</p>
                            <p className='text-sm lg:text-base'>Rating: {individualRating}</p>
                            <p className='text-sm lg:text-base'>Status: {status}</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-sm lg:text-base font-bold mb-2'>{price} Tk</p>

                        <Button color="failure" onClick={() => handleChooseBuilderProduct(product)}>ADD</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseProductCard;