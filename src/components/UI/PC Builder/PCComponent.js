import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PCComponent = () => {
    const { builder, total } = useSelector(state => state.pcBuilder);

    console.log(builder)


    const ProcessorData = builder?.find(data => data.category === "Processor");
    const MotherboardData = builder?.find(data => data.category === "Motherboard");
    const RAMData = builder?.find(data => data.category === "RAM");
    const StorageData = builder?.find(data => data.category === "Storage Device");
    const PowerSupplyData = builder?.find(data => data.category === "Power Supply Unit");
    const MonitorData = builder?.find(data => data.category === "Monitor");


    const skeletonName = <p className='w-60 h-4 bg-gray-200 rounded-md'></p>
    const skeletonPrice = <p className='w-10 h-4 bg-gray-200 rounded-md'></p>


    const handleBuildComplete = (builder) => {
        console.log(builder, builder.length);
        if (builder.length > 6) {
            toast.error("Please Fullfil Your PC Build!");
            return
        } else {
            toast.success("PC Build Completed!")
        }
    };


    return (
        <div className='w-full max-w-4xl mx-auto bg-white py-6 px-5 lg:px-20 mt-10'>

            <div className='flex items-center justify-between pb-5'>
                <h2 className='bg-blue-700 text-white font-bold rounded-md px-2 py-1 text-sm lg:text-base'>Total {builder?.length} Items</h2>
                <p className='bg-primary text-white font-bold rounded-md px-2 py-1 text-sm lg:text-base'>Total: {total || 0} Tk</p>
            </div>


            {/* Processor */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            ProcessorData?.img ?
                                <Image src={ProcessorData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>Processor<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{ProcessorData?.name ? ProcessorData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>
                        {ProcessorData?.price ? `${ProcessorData?.price} Tk` : skeletonPrice}
                    </p>
                    <Link href={"/pc-builder/choose/Processor"}> <Button gradientDuoTone="cyanToBlue" outline>Choose </Button></Link>
                </div>
            </div>

            {/* MotherBoard */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            MotherboardData?.img ?
                                <Image src={MotherboardData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>Motherboard<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{MotherboardData?.name ? MotherboardData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>
                        {MotherboardData?.price ? `${MotherboardData?.price} Tk` : skeletonPrice}
                    </p>
                    <Link href={"/pc-builder/choose/Motherboard"}> <Button gradientDuoTone="cyanToBlue" outline>Choose </Button></Link>
                </div>
            </div>

            {/* RAM */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            RAMData?.img ?
                                <Image src={RAMData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>RAM<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{RAMData?.name ? RAMData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>
                        {RAMData?.price ? `${RAMData?.price} Tk` : skeletonPrice}
                    </p>
                    <Link href={"/pc-builder/choose/RAM"}> <Button gradientDuoTone="cyanToBlue" outline>Choose</Button></Link>
                </div>
            </div>

            {/* Storage Device */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            StorageData?.img ?
                                <Image src={StorageData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>Storage<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{StorageData?.name ? StorageData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>{StorageData?.price ? `${StorageData?.price} Tk` : skeletonPrice}</p>

                    <Link href={"/pc-builder/choose/StorageDevice"}>
                        <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                    </Link>
                </div>
            </div>

            {/* Power Supply */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            PowerSupplyData?.img ?
                                <Image src={PowerSupplyData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>Power Supply<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{PowerSupplyData?.name ? PowerSupplyData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>{PowerSupplyData?.price ? `${PowerSupplyData?.price} Tk` : skeletonPrice}</p>

                    <Link href={"/pc-builder/choose/PowerSupply"}>
                        <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                    </Link>
                </div>
            </div>

            {/* Monitor */}
            <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                <div className='flex items-center gap-2'>
                    <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                        {
                            MonitorData?.img ?
                                <Image src={MonitorData?.img} alt='Processor' width={60} height={60} /> :
                                <Image src={"/assets/pc-builder/cpu.svg"} alt='Processor' width={30} height={30} />
                        }
                    </div>

                    <div>
                        <h1 className='font-bold'>Monitor<span className='text-primary'>*</span></h1>
                        <p className='text-sm lg:text-base'>{MonitorData?.name ? MonitorData?.name : skeletonName}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                    <p className='font-bold text-base lg:text-lg'>{MonitorData?.price ? `${MonitorData?.price} Tk` : skeletonPrice}</p>
                    <Link href={"/pc-builder/choose/Monitor"}>
                        <Button gradientDuoTone="cyanToBlue" outline>Choose</Button>
                    </Link>
                </div>
            </div>


            <div className='flex items-center justify-center'>
                <Button disabled={builder?.length > 6} color='failure' onClick={handleBuildComplete}>Complete Build </Button>
            </div>


        </div>
    );
};

export default PCComponent;