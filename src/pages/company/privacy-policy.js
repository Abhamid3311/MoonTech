import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function Privacypolicy() {
    return (
        <div className='bg-lightBg text-secondary'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 pb-10'>
                <div className='text-center py-10'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Privacy Policy</h1>
                    <h3 className='text-sm lg:text-base capitalize' >We strive to offer every individual customer the best possible Buying experience</h3>
                </div>

                <div className='text-sm lg:text-base'>
                    <div className='bg-white p-4 rounded-md'>
                        <h1 className='text-xl font-bold mb-2'>About MoonTech</h1>
                        <p><span className='text-primary'>MoonTech</span> has been founded on 1 March 2007. From then to now, MoonTech has won the heart of many people and now is a country-wide renowned brand. That has been possible due to the hard work MoonTech has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought MoonTech to the top choice for E-Commerce Sites in Bangladesh and is recognized as the largest Computer and Tech retailer. MoonTech has over 700 employees and is growing more and more, working diligently to fulfill the Main Criteria of MoonTech’s Motto or Vision. MoonTech is located in 6 Central territories in Dhaka, Gazipur, Chattogram, Khulna, Rajshahi, and Rangpur. MoonTech has a total of 17 Physical outlets all over the country; selling genuine Tech products. Among them, 9 outlets are in Dhaka as it’s the capital city. MoonTech also has two branches in Chittagong; the commercial capital of Bangladesh. There is one Branch in Gazipur, one in Khulna, one in Rajshahi, and one Branch in Rangpur. Apart from the Physical Branches, We also have our successful E-Commerce website.</p> <br /><br />


                        <h1 className='text-xl font-bold mb-2'>ISO Certified Quality Management System</h1>
                        <p><span className='text-primary'>MoonTech</span> has always managed the standards for Quality management. In 2022, MoonTech Ltd. was certified with the well-known &#34;ISO 9001:2015 certification&#34;. This marked a groundbreaking achievement for us. As an &#34;ISO 9001:2015 certified&#34; organization; we consistently maintain all sorts of regulatory requirements to provide the best products and services to meet any customer requirement.</p><br />




                        <h1 className='text-xl font-bold mb-2'> The Main Goal and Aim</h1>
                        <p> We are MoonTech, and we are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires. We delight in seeing our customers happy and satisfied with our resiliency in providing them with their products. Our complete focus is on the customers. We keep tabs and records on what our customers want, and we try our best to bring that to them. We are already providing our customers with a delivery system so that they can order online and receive their products from their area. They do not have to travel long distances to get their desired product.
                        </p> <br />




                        <h1 className='text-xl font-bold mb-2'>Services Being Provided</h1>
                        <p><span className='text-primary'>We are a Tech-based product seller</span>. We provide our customers with the best quality products at the most reasonable price. We have varieties of products that our customers can choose from. The product range starts from Desktop PC, Laptop, Gaming PC, Mobile Phones, UPS, Tablet PC, Graphics Tablet, Monitors, Office Equipment, Cameras, Security Cameras, Televisions, and many other products. Each of our products is checked and reviewed before it is sold to our Loyal Customers. You are our driving force to better ourselves in all aspects of the service-providing sector. We strive to become a Perfectionist Company that delivers everything, word for word.</p> <br />





                        <h1 className='text-xl font-bold mb-2'>Top-Selling Brands</h1>
                        <p>We have many<span className='text-primary'> top-selling brands</span>   that gained our attention to focus on them. These brands are Antec, Asrock, Bitfenix, Cryorig, Deli, EKWB, ESET, Galax, Gamdias, GEiL, Infocus, KWG, Lian Li, MaxGreen, Noctua, Razer, RnM, Team, XFX, Zyxel to name a few. As being top-selling and demanding brands, you will be able to get the latest updated products and service facilities more. You will also get better after-sales service from us. If any trouble occurs with these brand products, we will be able to solve it very easily. After fixing the problem you will be able to get the product in pristine condition just like if it is still new. These Brand Products are very high-quality products that provide the best service to the customers. We ensure that you are getting the best quality product. You can freely buy top-selling Brand products without having to think twice about what you are buying. We also provide our customers with the best pricing for the products compared to anywhere in Bangladesh. You can stay easy and relax knowing that one of our goals is to provide the customer with the best product at the most reasonable pricing. We ensure that our customers are satisfied with our product and the pricing.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}


Privacypolicy.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};