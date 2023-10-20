import { serviceData } from '@/components/utils/staticData'
import Link from 'next/link'
import React from 'react'

export default function Services() {
    return (
        <div className='bg-lightBg text-secondary py-10 lg:py-28'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
                {
                    serviceData.map(data => <div key={data.id} className='bg-white p-5 pb-8 rounded-md  relative '>
                        <div className='flex flex-col items-center justify-center gap-1 mb-2'>
                            <div className='text-4xl lg:text-6xl mb-2 text-primary '>
                                {data.icon}
                            </div>
                            <h1 className='text-lg lg:text-xl font-bold '>{data.title}</h1>
                            <h3 className='text-base lg:text-lg '>{data.sub}</h3>
                        </div>
                        <p className='text-sm text-paraClr lg:text-base mb-5'>{data.desc}</p>

                        <div className='absolute bottom-5 left-5'>
                            <Link href={data.link} className='text-primary font-bold hover:underline'>{data.btnText}</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
