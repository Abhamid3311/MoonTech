import Banner from '@/components/UI/Banner';
import RootLayout from '@/components/layouts/RootLayout';


export default function Home() {
  return (
    <div>
      <Banner />
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


