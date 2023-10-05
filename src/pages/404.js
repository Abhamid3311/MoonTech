import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {

    const router = useRouter();
    setTimeout(() => {
        router.push("/")
    }, 3000);


    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div>
                <h1 className='text-8xl font-bold text-center text-red-700 mb-5'>Opsss Sorry</h1>
                <h2 className='text-5xl font-bold text-center '>404 - Page No Found</h2>
            </div>
        </div>
    );
};

export default NotFound;