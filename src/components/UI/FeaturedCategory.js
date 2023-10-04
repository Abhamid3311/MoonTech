import React from 'react';
import { CategoryData } from './staticData';
import Link from 'next/link';

const FeaturedCategory = () => {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-3xl font-bold text-primary'>Featured Category</h1>
                <h3 className='' >Get Your Desired Product from Featured Category!</h3>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto py-10'>
                {
                    CategoryData?.map(category => <Link href={category.link} key={category.id}> <div className=' text-center category-card'>
                        <h1>{category.name}</h1>
                    </div>
                    </Link>)
                }

            </div>


        </div>
    );
};

export default FeaturedCategory;