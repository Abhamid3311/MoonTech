import RootLayout from '@/components/layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = ({data}) => {
    const router = useRouter()
    const { id } = router.query;


    console.log(id,data);


    return (
        <div>
            Product Details:{id}
        </div>
    );
};

export default ProductDetails;


ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const alldata = await res.json();

    return {
        props: {
            data: alldata,
        }
    }
};