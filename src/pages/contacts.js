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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full'>


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

                <div className='flex flex-col lg:flex-row items-start gap-8 my-8 w-full text-sm lg:text-base'>
                    <div className='bg-white rounded-md w-full h-full  lg:h-[470px]'>
                        <h1 className='bg-primary text-white rounded-t-md font-bold text-2xl px-4 py-2'>Customer Service</h1>

                        <div className='p-4'>
                            <h3 className='text-lg font-bold'>ORIGIN Lifetime Online Support</h3>
                            <li>Support@originpc.com</li>


                            <h3 className='text-lg font-bold mt-3'>24/7 Telephone Support</h3>
                            <li> 1-877-ORIGIN-0 (674-4460) (US & Canada)</li>
                            <li>305-971-1000 (International)</li>
                            <li>1-888-852-0441 (Government & Corporate)</li>
                            <li>CustomerService@originpc.com</li>

                            <h3 className='text-lg font-bold mt-3'>Preexisting ORIGIN PC AU Customers</h3>
                            <li>1300 904 021 (Australia)</li>
                            <li>Support@originpc.com.au</li>
                        </div>
                    </div>


                    <div className='bg-white rounded-md w-full  h-full  lg:h-[470px]'>
                        <h1 className='bg-primary text-white rounded-t-md  font-bold text-2xl px-4 py-2'>Sales & Other</h1>

                        <div className='p-4'>
                            <h3 className='text-lg font-bold'>Sales Hours</h3>

                            <h1>Monday - Friday</h1>
                            <p>9:00am - 9:00pm EST</p>

                            <h1 className='mt-2'> Saturday - Sunday, Holidays</h1>
                            <p>9:00am - 6:00pm EST</p>


                            <h3 className='text-lg font-bold mt-3'>Sales Support</h3>
                            <li>Sales@originpc.com</li>

                            <h3 className='text-lg font-bold mt-3'>Marketing</h3>
                            <li> For marketing inquiries, send proposals to: Marketing@originpc.com</li>

                            <h3 className='text-lg font-bold mt-3'>Government and Corporate</h3>
                            <li> GCBD@originpc.com</li>

                            <h3 className='text-lg font-bold mt-3'>General Inquries</h3>
                            <li> Info@originpc.com</li>


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