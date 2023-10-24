import { Button } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BsArrowRepeat } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { removeFromBuilder } from '@/redux/features/pcBuilder/pcBuilderSlice';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const PCComponent = () => {
    const { builder, total } = useSelector(state => state.pcBuilder);
    // const { data: session } = useSession();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    //Get Data
    const ProcessorData = builder?.find(data => data.category === "Processor");
    const MotherboardData = builder?.find(data => data.category === "Motherboard");
    const RAMData = builder?.find(data => data.category === "RAM");
    const StorageData = builder?.find(data => data.category === "Storage Device");
    const PowerSupplyData = builder?.find(data => data.category === "Power Supply Unit");
    const MonitorData = builder?.find(data => data.category === "Monitor");
    const CasingData = builder?.find(data => data.category === "Accessories");
    const MouseData = builder?.find(data => data.category === "Mouse");
    const KeyboardData = builder?.find(data => data.category === "Keyboard");
    const HeadphonesData = builder?.find(data => data.category === "Headphones");

    //Skeleton
    const skeletonName = <p className='w-32 lg:w-60 h-4 bg-gray-200 rounded-md'></p>
    const skeletonPrice = <p className='w-10 h-4 bg-gray-200 rounded-md'></p>

    //Handle Remove Product From Builder
    const handleRemoveProduct = (data) => {
        dispatch(removeFromBuilder(data))
    };



    //Get Selected Build Data & Show error
    const collectSelectedData = () => {
        const selectedData = {
            Processor: ProcessorData,
            Motherboard: MotherboardData,
            RAM: RAMData,
            StorageDevice: StorageData,
            PowerSupply: PowerSupplyData,
            Monitor: MonitorData,
            Casing: CasingData,
            Mouse: MouseData,
            Keyboard: KeyboardData,
            Headphones: HeadphonesData
        };

        // Validate if required components are selected
        const requiredComponents = ["Processor", "Motherboard", "RAM", "StorageDevice", "PowerSupply", "Monitor"];
        const newErrors = {};

        requiredComponents.forEach((component) => {
            if (!selectedData[component]) {
                newErrors[component] = `${component} is required.`;
            }
        });

        setErrors(newErrors);
        return selectedData;
    };



    // Handle Complete Build Btn
    const handleBuildComplete = () => {
        const selectedData = collectSelectedData();

        if (Object.keys(errors).length === 0) {
            toast.success("Build Completed Successfully!");
            console.log("Selected Data:", selectedData);
        } else {
            toast.error("Build Complete Failed!")
            console.log("Validation Errors:", errors);
        }
    };



    return (
        <div className='w-full max-w-4xl mx-auto bg-white py-6  mt-10'>

            <div className='flex items-center justify-between pb-5 px-5 lg:px-20'>
                <div>
                    <h1 className='text-primary text-xl lg:text-2xl font-bold'>MoonTech</h1>
                    <p>Build Your Own PC</p>
                </div>

                <div className='bg-blue-700 text-white font-bold rounded-md text-sm lg:text-base px-3 py-1'>
                    <p>Total {total || 0} Tk</p>
                    <p className='text-center'> {builder?.length} Items</p>

                </div>
            </div>
            <hr />
            <div className='bg-gray-700 text-white w-full px-3 lg:px-20'>
                <h3>Core Components</h3>
            </div>


            <div className='px-3 lg:px-20'>
                {/* Processor */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                ProcessorData?.img ?
                                    <Image src={ProcessorData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="game-icons:processor" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Processor<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{ProcessorData?.name ? ProcessorData?.name : skeletonName}</p>

                            {/* Display error message */}
                            {errors["Processor"] && (
                                <p className="text-red-500">{errors["Processor"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>
                            {ProcessorData?.price ? `${ProcessorData?.price} Tk` : skeletonPrice}
                        </p>

                        {
                            !ProcessorData ?
                                <Link href={"/pc-builder/choose/Processor"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/Processor"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(ProcessorData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>

                {/* MotherBoard */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                MotherboardData?.img ?
                                    <Image src={MotherboardData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="ph:cpu" className="w-[30px] h-[30px] text-blue-800" />

                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Motherboard<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{MotherboardData?.name ? MotherboardData?.name : skeletonName}</p>

                            {/* Display error message */}
                            {errors["Motherboard"] && (
                                <p className="text-red-500">{errors["Motherboard"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>
                            {MotherboardData?.price ? `${MotherboardData?.price} Tk` : skeletonPrice}
                        </p>

                        {
                            !MotherboardData ?
                                <Link href={"/pc-builder/choose/Motherboard"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/Motherboard"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(MotherboardData)}><RxCross2 /> </Button>
                                </div>
                        }
                    </div>
                </div>

                {/* RAM */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                RAMData?.img ?
                                    <Image src={RAMData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="game-icons:ram" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>RAM<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{RAMData?.name ? RAMData?.name : skeletonName}</p>

                            {/* Display error message */}
                            {errors["RAM"] && (
                                <p className="text-red-500">{errors["RAM"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>
                            {RAMData?.price ? `${RAMData?.price} Tk` : skeletonPrice}
                        </p>
                        {
                            !RAMData ?
                                <Link href={"/pc-builder/choose/RAM"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/RAM"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(RAMData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>

                {/* Storage Device */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                StorageData?.img ?
                                    <Image src={StorageData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="clarity:storage-line" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Storage<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{StorageData?.name ? StorageData?.name : skeletonName}</p>
                            {/* Display error message */}
                            {errors["StorageDevice"] && (
                                <p className="text-red-500">{errors["StorageDevice"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{StorageData?.price ? `${StorageData?.price} Tk` : skeletonPrice}</p>

                        {
                            !StorageData ?
                                <Link href={"/pc-builder/choose/StorageDevice"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/StorageDevice"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(StorageData)}><RxCross2 /> </Button>
                                </div>
                        }


                    </div>
                </div>

                {/* Power Supply */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                PowerSupplyData?.img ?
                                    <Image src={PowerSupplyData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="icon-park-outline:power-supply" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Power Supply<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{PowerSupplyData?.name ? PowerSupplyData?.name : skeletonName}</p>
                            {/* Display error message */}
                            {errors["PowerSupply"] && (
                                <p className="text-red-500">{errors["PowerSupply"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{PowerSupplyData?.price ? `${PowerSupplyData?.price} Tk` : skeletonPrice}</p>

                        {
                            !PowerSupplyData ?
                                <Link href={"/pc-builder/choose/PowerSupply"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/PowerSupply"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(PowerSupplyData)}><RxCross2 /> </Button>
                                </div>
                        }


                    </div>
                </div>

                {/* Casing */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                CasingData?.img ?
                                    <Image src={CasingData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="lucide:pc-case" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Casing</h1>
                            <p className='text-sm lg:text-base'>{CasingData?.name ? CasingData?.name : skeletonName}</p>

                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{CasingData?.price ? `${CasingData?.price} Tk` : skeletonPrice}</p>

                        {
                            !CasingData ?
                                <Link href={"/pc-builder/choose/accesorries"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/accesorries"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(CasingData)}><RxCross2 /> </Button>
                                </div>
                        }


                    </div>
                </div>
            </div>


            {/*  Peripherals & Others */}


            <hr />
            <div className='bg-gray-700 text-white w-full px-3 lg:px-20'>
                <h3>Peripherals & Others</h3>
            </div>


            <div className='px-3 lg:px-20'>
                {/* Monitor */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                MonitorData?.img ?
                                    <Image src={MonitorData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="material-symbols:monitor-outline" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Monitor<span className='text-primary'>*</span></h1>
                            <p className='text-sm lg:text-base'>{MonitorData?.name ? MonitorData?.name : skeletonName}</p>

                            {/* Display error message */}
                            {errors["Monitor"] && (
                                <p className="text-red-500">{errors["Monitor"]}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{MonitorData?.price ? `${MonitorData?.price} Tk` : skeletonPrice}</p>

                        {
                            !MonitorData ?
                                <Link href={"/pc-builder/choose/Monitor"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/Monitor"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(MonitorData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>


                {/* Keyboard */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                KeyboardData?.img ?
                                    <Image src={KeyboardData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="radix-icons:keyboard" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Keyboard</h1>
                            <p className='text-sm lg:text-base'>{KeyboardData?.name ? KeyboardData?.name : skeletonName}</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{KeyboardData?.price ? `${KeyboardData?.price} Tk` : skeletonPrice}</p>

                        {
                            !KeyboardData ?
                                <Link href={"/pc-builder/choose/keyboard"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/keyboard"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(KeyboardData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>

                {/* Mouse */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                MouseData?.img ?
                                    <Image src={MouseData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="material-symbols:mouse-outline" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Mouse</h1>
                            <p className='text-sm lg:text-base'>{MouseData?.name ? MouseData?.name : skeletonName}</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{MouseData?.price ? `${MouseData?.price} Tk` : skeletonPrice}</p>

                        {
                            !MouseData ?
                                <Link href={"/pc-builder/choose/mouse"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/mouse"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(MouseData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>


                {/* Headphones */}
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 pb-3 my-5'>
                    <div className='flex items-center gap-2'>
                        <div className='h-[60px] w-[60px] bg-blue-100 flex items-center justify-center'>
                            {
                                HeadphonesData?.img ?
                                    <Image src={HeadphonesData?.img} alt='Processor' width={60} height={60} /> :
                                    <Icon icon="ic:outline-headphones" className="w-[30px] h-[30px] text-blue-800" />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold'>Headphones</h1>
                            <p className='text-sm lg:text-base'>{HeadphonesData?.name ? HeadphonesData?.name : skeletonName}</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-4'>
                        <p className='font-bold text-base lg:text-lg'>{HeadphonesData?.price ? `${HeadphonesData?.price} Tk` : skeletonPrice}</p>

                        {
                            !HeadphonesData ?
                                <Link href={"/pc-builder/choose/headphones"}>
                                    <Button gradientDuoTone="cyanToBlue" outline>Choose </Button>
                                </Link> :

                                <div className='flex items-center gap-1'>
                                    <Link href={"/pc-builder/choose/headphones"}>
                                        <Button gradientDuoTone="cyanToBlue" outline><BsArrowRepeat /> </Button>
                                    </Link>

                                    <Button color="failure" outline onClick={() => handleRemoveProduct(HeadphonesData)}><RxCross2 /> </Button>
                                </div>
                        }

                    </div>
                </div>

            </div>


            <div className='flex items-center justify-center gap-2'>
                <Button color='blue' onClick={handleBuildComplete}>BUY NOW</Button>
                <Button color='failure' onClick={handleBuildComplete}>SAVE PC </Button>
            </div>



        </div>
    );
};

export default PCComponent;