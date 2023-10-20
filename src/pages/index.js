import Banner from '@/components/UI/home/Banner';
import FeaturedProdcts from '@/components/UI/home/Featured';
import FeaturedCategory from '@/components/UI/home/FeaturedCategory';
import ProductDesc from '@/components/UI/home/ProductDesc';
import RootLayout from '@/components/layouts/RootLayout';
import { baseUrl } from '@/url';


export default function Home({ products }) {
  return (
    <div>
      <Banner />
      <FeaturedCategory />
      <FeaturedProdcts products={products} />
      <ProductDesc />

    </div>
  )
};


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/products`);
  const data = await res.json();
  // console.log(data)

  return {
    props: {
      products: data,
    }
  }
};

