import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function ProductDesc() {
    return (
        <div className='desc-bg h-full lg:h-[70vh] py-20'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 flex items-center  h-full'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-2xl lg:text-6xl font-bold mb-1'>XENEON FLEX</h1>
                    <h3 className='text-xl lg:text-5xl  mb-1'>AVAILABLE NOW</h3>
                    <p className='text-sm lg:text-xl mb-5 max-w-2xl'>World’s First Bendable OLED 21:9 Gaming Monitor</p>

                    <Button color="failure"><Link href={"/"}>LEARN MORE</Link>  </Button>
                </div>

            </div>
        </div>
    )
}
