import RootLayout from '@/components/layouts/RootLayout';
import { offersData } from '@/components/utils/staticData';
import { Icon } from '@iconify/react';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function Offers() {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 pb-10'>
                <div className='text-center py-10'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Our Offers</h1>
                    <h3 className='text-sm lg:text-base' >Get Your Desired Product Within Your Budgets!</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        offersData.map(offer => <div key={offer._id} className='h-full lg:h-[420px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white relative  w-full max-w-[380px]'>
                            <div className='h-[170px] lg:h-[240px] w-full'>
                                <img src={offer.img} alt={offer.title} srcSet="" className='card-img w-full' />
                            </div>

                            <div className='  h-full '>
                                <div className='flex items-center justify-between bg-gray-200 py-2 px-3'>
                                    <div className='flex items-center gap-2'>
                                        <Icon icon="simple-line-icons:calender" />
                                        <span className='text-xs lg:text-sm'>{offer.date}</span>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <Icon icon="uil:shop" />
                                        <span className='text-xs lg:text-sm'>{offer.type}</span>
                                    </div>
                                </div>

                                <div className='px-2 lg:px-3 pt-1 pb-3 text-center '>
                                    <h1 className="text-base lg:text-lg font-bold " >{offer.title} </h1>
                                    <p className='text-xs lg:text-base'>{offer.subTitle}</p>

                                    <div className=' flex items-center justify-center mt-4'>
                                        <Link href={`/Offers/offer-details/${offer._id}`}>
                                            <Button color='failure' className='flex items-center '>
                                                <span>View Details</span>
                                                <Icon icon="teenyicons:arrow-right-outline" className='text-xl ml-1' />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>)
                    }
                </div>

            </div>


        </div>
    )
}


Offers.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};