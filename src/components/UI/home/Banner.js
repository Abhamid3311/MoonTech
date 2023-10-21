import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { BannerData } from '../../utils/staticData';
import Link from 'next/link';


const Banner = () => {
    return (
        <div >
            <Carousel >
                {
                    BannerData.map(BannerData => <BannerDetails key={BannerData.id} BannerData={BannerData} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;


const BannerDetails = ({ BannerData }) => {
    const { title, subTitle, img, desc, descClr, link, btnText } = BannerData;
    const textStyle = {
        color: descClr  // Set text color based on descClr
    };
    return (
        <div className='w-full  h-full lg:min-h-[90vh] py-10 lg:py-0' style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div className='max-w-7xl mx-auto flex items-center h-full  lg:min-h-[50vh] px-5 lg:px-3 '>
                <div className='text-white '>
                    <h3 className='text-xl lg:text-[40px] mb-2'>{title}</h3>
                    <h1 className='text-2xl lg:text-[60px] font-bold my-1 lg:my-4'>{subTitle}</h1>
                    <p style={textStyle} className='text-sm lg:text-xl mb-5 max-w-2xl'>{desc}</p>

                    <Button color="failure"><Link href={link}>{btnText}</Link>  </Button>


                </div>
            </div>

        </div>
    )
}