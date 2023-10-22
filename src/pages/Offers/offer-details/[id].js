import RootLayout from '@/components/layouts/RootLayout';
import { offersData } from '@/components/utils/staticData';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function OfferDetails() {
    const router = useRouter();
    const { id } = router.query;

    const getOffer = offersData.find(data => data._id == parseFloat(id));
    console.log(getOffer, id);


    return (
        <div className='bg-lightBg text-secondary '>
            <div className='max-w-7xl mx-auto px-5 lg:px-0  py-10 '>
                <div className='max-w-3xl mx-auto bg-white rounded-md shadow-md'>

                    <div className='w-full  h-full lg:h-[400px]'>
                        <Image src={getOffer?.img} alt={getOffer?.title} width={200} height={300} className='h-full w-full' />
                    </div>

                    <div className='p-3'>
                        <h1 className='text-lg lg:text-xl text-primary font-bold text-center pb-2'>{getOffer?.title}</h1>
                        <div className='flex items-center justify-between bg-gray-200 py-2 px-3'>
                            <div className='flex items-center gap-2'>
                                <Icon icon="simple-line-icons:calender" />
                                <span className='text-xs lg:text-sm'>{getOffer?.date}</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Icon icon="uil:shop" />
                                <span className='text-xs lg:text-sm'>{getOffer?.type}</span>
                            </div>
                        </div>

                        <h3 className='text-base lg:text-lg'>{getOffer?.subTitle}</h3>
                        <p className='text-sm lg:text-base mt-3'>{getOffer?.desc}</p>

                    </div>
                </div>
            </div>
        </div>
    )
};



OfferDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
