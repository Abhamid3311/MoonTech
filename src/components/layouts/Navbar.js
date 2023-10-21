import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { removeOne } from '@/redux/features/cart/cartSlice';

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const { products, total } = useSelector(state => state.cart);
    console.log(products, total);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = isNavbarFixed
        ? {
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
        }
        : {
            backgroundColor: 'transparent',
        };

    const handleRemoveFromCartBtn = (pro) => {
        dispatch(removeOne(pro))
    };


    return (

        <>

            <Navbar className=' text-white' style={navbarStyle}>


                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl lg:text-2xl font-bold text-primary">
                        MoonTech
                    </span>
                </Navbar.Brand>


                <div className="flex gap-2 md:order-2">
                    <Link href={'/pc-builder'}>
                        <Button color="failure" className="py-0.5 px-1 lg:py-1 lg:px-5 text-sm lg:text-base">
                            PC Builder
                        </Button>
                    </Link>

                    <button onClick={toggleDrawer} class="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">

                        <Icon icon={"bx:cart-add"} className='text-lg md:xl lg:text-2xl font-bold text-white' />

                        <span class="sr-only">Notifications</span>
                        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 ">{products.length}</div>
                    </button>




                    {/*  {
        session?.user ?
            <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-2 text-sm lg:text-base hidden lg:block" onClick={() => signOut()}> Logout </Button>
            :
            <Link href={'/login'} className='hidden lg:block'>
                <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-3 text-sm lg:text-base">
                    Login
                </Button>
            </Link>
    } */}

                    <Navbar.Toggle />
                </div>


                <Navbar.Collapse className='text-white'>
                    <Navbar.Link active={router.pathname == "/"} className='text-white'><Link href={'/'}> Home </Link> </Navbar.Link>
                    <Navbar.Link active={router.pathname == "/Products"} className='text-white'>
                        <Link href={'/Products'}> Products </Link>
                    </Navbar.Link>

                    <Navbar.Link className='text-white'>
                        <Dropdown inline label="Categories" >
                            <Dropdown.Item><Link href={'/categories/Processor'}> Processor </Link> </Dropdown.Item>
                            <Dropdown.Item>  <Link href={'/categories/Motherboard'}> Motherboard </Link> </Dropdown.Item>
                            <Dropdown.Item> <Link href={'/categories/RAM'}> RAM </Link> </Dropdown.Item>
                            <Dropdown.Item><Link href={'/categories/PowerSupply'}> Power Supply Unit </Link>  </Dropdown.Item>
                            <Dropdown.Item> <Link href={'/categories/StorageDevice'}> Storage Device </Link>  </Dropdown.Item>
                            <Dropdown.Item> <Link href={'/categories/Monitor'}> Monitor </Link> </Dropdown.Item>
                            <Dropdown.Item><Link href={'/categories/accesorries'}> Others </Link> </Dropdown.Item>

                        </Dropdown>
                    </Navbar.Link>

                    <Navbar.Link active={router.pathname == "/about-us"} className='text-white' >
                        <Link href={'/about-us'}> About Us</Link>
                    </Navbar.Link>

                    <Navbar.Link className='text-white' active={router.pathname == "/contacts"}>
                        <Link href={'/contacts'}> Contacts </Link>
                    </Navbar.Link>


                    {
                        session?.user ?
                            <Navbar.Link className='text-white bg-blue-600 w-full text-center px-3 py-1 block lg:hidden' onClick={() => signOut()}>Logout</Navbar.Link>
                            :
                            <Link href={'/login'}>
                                <Navbar.Link className='text-white bg-blue-600 w-full text-center px-3 py-1 block lg:hidden'>
                                    Login
                                </Navbar.Link>
                            </Link>

                    }




                </Navbar.Collapse>


            </Navbar>



            <div className=''>
                <div
                    id="drawer-right-example"
                    className={`fixed top-16 right-0 z-40 h-screen overflow-y-auto  transition-transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} bg-white w-80 `} tabindex="-1" aria-labelledby="drawer-right-label" >

                    <div className='bg-primary flex items-center justify-between text-white h-10 px-4 '>
                        <h1 className='text-lg  font-bold'>Your Cart</h1>

                        <button onClick={toggleDrawer} className='text-2xl  font-bold'><Icon icon="material-symbols:close" /></button>
                    </div>



                    <div className='relative'>
                        <div className=' '>
                            {
                                products.length !== 0 ? <div className='px-4 my-3'>

                                    {products?.map(pro => <div key={pro?._id} className='text-secondary mb-4 flex items-start justify-between w-full'>
                                        <div>
                                            <h1 className='text-sm font-bold'>{pro?.name}</h1>
                                            <p className='text-end'>{parseFloat(pro?.price)} &#215; {pro?.quantity} = {parseFloat(pro?.price) * pro?.quantity} Tk</p>
                                            <hr />
                                        </div>
                                        <button onClick={() => handleRemoveFromCartBtn(pro)}>
                                            <Icon icon="material-symbols:delete-outline" className='text-primary text-lg' />
                                        </button>

                                        <hr />

                                    </div>)}

                                </div> : null
                            }
                        </div>


                        <div className=''>
                            <div className='flex items-center justify-between text-secondary h-10 px-4 '>
                                <h1 className='text-lg  font-bold'>Total</h1>
                                <p>{total} Tk</p>
                            </div>

                            <button className='bg-primary w-full py-1 font-bold'>Checkout</button>
                        </div>
                    </div>
                </div>

            </div>

        </>


    );
};

export default Header;