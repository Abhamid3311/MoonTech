import RootLayout from '@/components/layouts/RootLayout';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/features/cart/cartSlice';
import { Icon } from '@iconify/react';
import { Button, Table } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
    const { products, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(products, total)
    return (
        <div className='bg-lightBg text-secondary min-h-screen'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 py-10'>
                <div className='bg-white shadow-sm rounded-md p-2 px-4'>
                    <h1 className='text-2xl mb-5 font-bold'>Shopping Cart</h1>

                    <div className="overflow-x-auto">
                        <Table className="w-full">
                            <Table.Head>
                                <Table.HeadCell className="truncate">
                                    Image
                                </Table.HeadCell>
                                <Table.HeadCell className="truncate">
                                    Product name
                                </Table.HeadCell>
                                <Table.HeadCell className="truncate">
                                    Quantity
                                </Table.HeadCell>
                                <Table.HeadCell className="truncate">
                                    Remove
                                </Table.HeadCell>
                                <Table.HeadCell className="truncate">
                                    Price
                                </Table.HeadCell>


                            </Table.Head>


                            <Table.Body className="divide-y">

                                {products?.map(pro => <Table.Row key={pro?._id} className="bg-white  ">
                                    <Table.Cell className="truncate">
                                        <Image src={pro?.img} alt={pro?.name} width={40} height={40}  className="max-w-full h-auto" />
                                    </Table.Cell>

                                    <Table.Cell >
                                       <p className='text-sm lg:text-base'> {pro?.name}</p>
                                    </Table.Cell>

                                    <Table.Cell className="truncate">
                                        <div className='flex items-center gap-2'>
                                            <p className='text-base lg:text-xl font-bold'> {pro?.quantity}</p>

                                            <div className='flex flex-col gap-1'>
                                                <button onClick={() => dispatch(increaseQuantity(pro))}
                                                    className='bg-green-500 text-white px-2 py-0.5'>+</button>
                                                <button
                                                    onClick={() => dispatch(decreaseQuantity(pro))}
                                                    className='bg-blue-500 text-white px-2 py-0.5'>-</button>
                                            </div>
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell className="truncate">
                                        <button onClick={() => dispatch(removeFromCart(pro))}>
                                            <Icon icon="material-symbols:delete-outline" className='text-primary text-2xl' />
                                        </button>
                                    </Table.Cell>


                                    <Table.Cell className="truncate">
                                        {pro?.price * pro?.quantity} Tk
                                    </Table.Cell>
                                </Table.Row>
                                )}

                            </Table.Body>
                        </Table>

                        <div className='text-lg lg:text-2xl font-bold  text-end w-full px-5'>
                            <hr className='my-3' />
                            <h1>Total: <span className='text-primary'>{total} Tk</span></h1>
                            <hr className='my-3' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between px-5 my-3'>
                        <Link href={"/products"}><Button color='blue' className='text-xs lg:text-base'>Continue Shopping</Button></Link>
                        <Link href={"/checkout/on-page-checkout"}><Button color='blue'  className='text-sm lg:text-base'>Confirm Order</Button></Link>
                    </div>

                </div>

            </div>
        </div>
    )
}


Cart.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};