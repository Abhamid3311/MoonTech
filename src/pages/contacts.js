import RootLayout from '@/components/layouts/RootLayout';
import { Icon } from '@iconify/react';
import React from 'react';

const Contacts = () => {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 pb-10'>
                <div className='text-center py-10'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Contact Information</h1>
                    <h3 className='text-sm lg:text-base capitalize' >Call Us for any kind of query!</h3>
                </div>

                <div className='flex items-center gap-10 w-full'>


                    <div className='flex items-center gap-5 bg-white rounded-md  w-full p-4'>
                        <span className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center'><Icon icon="ic:round-phone" className='text-xl' /></span>

                        <div>
                            <p className='text-sm lg:text-base'>Contact Us (10 AM - 7 PM)</p>
                            <h1 className='text-lg font-bold'>16793 / 09678002003</h1>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 bg-white rounded-md  w-full  p-4'>
                        <span className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center'><Icon icon="clarity:email-line" className='text-xl' /></span>

                        <div>
                            <p className='text-sm lg:text-base'>For Corporate Deals & Complain</p>
                            <h1 className='text-lg font-bold'>help@moontech.com</h1>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 bg-white rounded-md  w-full  p-4'>
                        <span className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center'><Icon icon="bx:support" className='text-xl' /></span>

                        <div>
                            <p className='text-sm lg:text-base'>For Refund & Warrenty Policy</p>
                            <h1 className='text-lg font-bold'>support@moontech.com</h1>
                        </div>
                    </div>



                </div>




            </div>
        </div>
    );
};

export default Contacts;

Contacts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};