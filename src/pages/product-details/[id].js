import ReviewDetails from '@/components/UI/ReviewDetails';
import RootLayout from '@/components/layouts/RootLayout';
import { addToCart, buyNowBtn } from '@/redux/features/cart/cartSlice';
import { baseUrl } from '@/url';
import { Icon } from '@iconify/react';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductDetails = ({ data }) => {
    console.log(data)
    const { _id, img, name, category, status, averageRating, price, description, individualRating, features, Reviews } = data;

    const dispatch = useDispatch();

    const handleAddToCartBtn = (product) => {
        dispatch(addToCart(product));
        toast.success("Item Added Succesfully");
    };

    const handleBuyNowBtn = (product) => {
        dispatch(buyNowBtn(product));
    };



    return (
        <div className='bg-lightBg text-secondary '>
            <div className='max-w-7xl mx-auto px-5 lg:px-0  py-10 '>
                <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-10 mb-5 lg:mb-10 bg-white p-10'>
                    <div className='w-full lg:w-1/2 h-full lg:h-[400px]'>
                        <Image src={img} alt={name} width={200} height={300} className='h-full w-full' />
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div>
                            <h1 className='text-primary text-xl lg:text-2xl font-bold mb-2'>{name}</h1>

                            <div className='flex flex-wrap items-center gap-1 mb-2 font-bold text-xs lg:text-sm'>
                                <span className='bg-red-200 px-2 py-1 rounded-full font-semibold'>Category : {category}</span>
                                <span className='bg-red-200 px-2 py-1 rounded-full font-semibold'>Status : {status}</span>
                                <span className='bg-red-200 px-2 py-1 rounded-full font-semibold'> Rating : {individualRating}</span>
                                <span className='bg-red-200 px-2 py-1 rounded-full font-semibold'>Avg. Rating : {averageRating}</span>
                            </div>

                            <p className=' font-bold mb-2'>Price: <span className='text-xl text-primary'>{price}</span> Tk</p>

                            <div>
                                <p><span className=' font-bold text-sm lg:text-base'>description: </span>{description}</p>
                            </div>

                            <div>
                                <h2 className=' font-bold mt-2'>Features:</h2>
                                <ul className=' text-sm lg:text-base'>
                                    {features.map((feat, index) => (
                                        <li key={index}>
                                            {feat.brand && <p>Brand: {feat.brand}</p>}
                                            {feat.model && <p>Model: {feat.model}</p>}
                                            {feat.specification && <p>Specification: {feat.specification}</p>}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='flex items-center gap-2 my-3'>
                                <Link href={"/checkout/cart"} >
                                    <Button color='failure' className='px-3 py-0.5' onClick={() => handleBuyNowBtn(data)}>
                                        <span> Buy Now</span>
                                        <Icon icon="icon-park-outline:buy" className='text-xl md:2xl font-bold ml-1' />
                                    </Button>
                                </Link>

                                <Button onClick={() => handleAddToCartBtn(data)} color='warning' className='px-3 py-0.5'>
                                    <span> Add to Cart</span>
                                    <Icon icon={"bx:cart-add"} className='text-xl md:2xl font-bold ' />
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 '>
                    <h2 className=' font-bold mt-2 text-lg lg:text-2xl text-primary mb-5'>Reviews </h2>
                    <ReviewDetails Reviews={Reviews} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;




ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export const getStaticPaths = async () => {
    const res = await fetch(`${baseUrl}/products`);
    const alldata = await res.json();

    const paths = alldata.map(data => ({
        params: { id: data._id }
    }));

    return { paths, fallback: false }
}



export const getStaticProps = async (context) => {
    // console.log(params)
    const { params } = context;
    const res = await fetch(`${baseUrl}/products/${params.id}`);
    const sinData = await res.json();

    return {
        props: {
            data: sinData,
        }
    }
};