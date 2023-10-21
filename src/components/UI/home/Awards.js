import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Awards() {
    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        // dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='bg-lightBg text-secondary h-[50vh] py-10'>
            <h1 className='text-center text-2xl font-bold'>INDUSTRY AWARDS</h1>

            <div className='pt-10 max-w-7xl mx-auto' >
                <Slider {...settings}>
                    <div>
                        <img src="/assets/awards/cnet-editors-choice.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/maxpc-kickass.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/pc-perspective-editors-choice.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/pcmag-editors-choice.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/techradar-editors-choice.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/cnet-editors-choice.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards/toms-guide-gaming-desktops.png" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/assets/awards//toms-hardware-readers-choice.png" alt="" srcset="" />
                    </div>


                </Slider>
            </div>



        </div>
    )
}
