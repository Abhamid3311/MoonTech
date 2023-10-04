import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { BannerData } from './staticData';
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
        <div className='w-full  min-h-[90vh] ' style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div className='max-w-7xl mx-auto flex items-center min-h-[60vh]'>
                <div className='text-white '>
                    <h3 className='text-[40px] -mb-6'>{title}</h3>
                    <h1 className='text-[60px] font-bold'>{subTitle}</h1>
                    <p style={textStyle} className='text-xl mb-5'>{desc}</p>

                    <div>
                        <Button color="failure"><Link href={link}>{btnText}</Link>  </Button>
                        {/* <Button color="failure">Failure </Button> */}
                    </div>


                </div>
            </div>

        </div>
    )
}