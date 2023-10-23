import { Button } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDesc() {
    return (
        <div className='desc-bg h-full lg:h-[70vh] py-20'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 flex items-center  h-full'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-2xl lg:text-6xl font-bold mb-1'>XENEON FLEX</h1>
                    <h3 className='text-xl lg:text-5xl  mb-1'>AVAILABLE NOW</h3>
                    <p className='text-sm lg:text-xl mb-5 max-w-2xl'>World’s First Bendable OLED 21:9 Gaming Monitor</p>

                    <Link href={"/categories/Monitor"}><Button color="failure" className='px-4 py-0.5'>LEARN MORE </Button></Link>
                </div>

            </div>
        </div>
    )
}



export const ProductDesc2 = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <div className='desc-bg-two h-full lg:h-[80vh] py-20 text-white'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 flex items-center  h-full'>
                <div className='w-full lg:w-3/5'> </div>


                <div className='w-full lg:w-2/5 flex flex-col items-center justify-center'>
                    <Image src={'/assets/emblem-removebg-preview.png'} alt='' width={150} height={150} />

                    <h1 className='text-2xl lg:text-5xl text-center font-bold mb-1'>ASSEMBLED AND  SUPPORTED</h1>
                    <h3 className='text-lg text-primary  mb-1 text-center'>IN THE USA</h3>
                    <div className='bg-white h-[2px] w-24 mt-2 mb-5'></div>
                    <p className='text-xs lg:text-sm text-center mb-5'>By buying an ORIGIN PC, you get access to a fast and powerful PC as well as supporting jobs based in the United States.</p>
                    {
                        currentPath !== "/about-us" && <Link href={"/about-us"}><Button color="failure" className='px-4 py-0.5'>LEARN MORE </Button></Link>
                    }

                </div>

            </div>
        </div>
    )
}
