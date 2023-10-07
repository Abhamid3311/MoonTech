import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PCComponent = () => {
    const { builder, total } = useSelector(state => state.pcBuilder);

    console.log(builder, total);


    return (
        <div className='max-w-4xl mx-auto bg-white py-6 px-20 mt-10'>

            <div className='flex items-center justify-between'>
                <h2 className='bg-blue-700 text-white font-bold rounded-md px-2 py-1'>Total {builder?.length} Items</h2>
                <p className='bg-primary text-white font-bold rounded-md px-2 py-1'>Total: {total || 0} Tk</p>
            </div>


            {/* Processor */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Processor<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/Processor"}>Choose</Link> </Button>
                </div>
            </div>

            {/* MotherBoard */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/motherboard.svg"} alt='motherboard' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Motherboard<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/Motherboard"}>Choose</Link> </Button>
                </div>
            </div>

            {/* RAM */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/ram.svg"} alt='ram' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>RAM<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/RAM"}>Choose</Link> </Button>
                </div>
            </div>

            {/* Storage Device */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/hdd.svg"} alt='motherboard' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Storage<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/StorageDevice"}>Choose</Link> </Button>
                </div>
            </div>

            {/* Power Supply */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/psupply.svg"} alt='Power Supply' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Power Supply<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/PowerSupply"}>Choose</Link> </Button>
                </div>
            </div>

            {/* Monitor */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/monitor.svg"} alt='monitor' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Monitor<span className='text-primary'>*</span></h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>10200 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/Monitor"}>Choose</Link> </Button>
                </div>
            </div>

            {/* Casing */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        <Image src={"/assets/pc-builder/casing.svg"} alt='Casing' width={30} height={30} />
                    </div>

                    <div>
                        <h1 className='font-bold'>Casing</h1>
                        <p >Asus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p className='font-bold text-lg'>2000 Tk</p>
                    <Button gradientDuoTone="cyanToBlue" outline><Link href={"/pc-builder/choose/accesorries"}>Choose</Link> </Button>
                </div>
            </div>




            <div className='flex items-center justify-center'>
                <Button color='failure'>Complete Build </Button>
            </div>


        </div>
    );
};

export default PCComponent;