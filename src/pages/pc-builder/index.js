import PCComponent from '@/components/UI/PC Builder/PCComponent';
import RootLayout from '@/components/layouts/RootLayout';


const PCBuilderPage = () => {
    return (
        <div className='bg-lightBg text-secondary py-10'>
            <div className='text-center '>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>Custom Desktop</h1>
                <h3 className='text-sm lg:text-base' >Build Your Own dream</h3>
            </div>
            <PCComponent />
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};




