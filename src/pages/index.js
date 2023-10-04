import Banner from '@/components/UI/Banner';
import FeaturedProdcts from '@/components/UI/Featured';
import FeaturedCategory from '@/components/UI/FeaturedCategory';
import RootLayout from '@/components/layouts/RootLayout';


export default function Home({ products }) {
  return (
    <div>
      <Banner />
      <FeaturedProdcts products={products} />
      <FeaturedCategory />
    </div>
  )
};


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/accessories");
  const data = await res.json();
  // console.log(data)

  return {
    props: {
      products: data,
    }
  }
};

