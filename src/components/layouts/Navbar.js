import React from 'react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    // console.log(session);


    return (
        <Navbar rounded className='bg-black text-white'>


            <Navbar.Brand href="/">
                {/*  <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
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

                {
                    session?.user ?
                        <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-2 text-sm lg:text-base hidden lg:block" onClick={() => signOut()}> Logout </Button>
                        :
                        <Link href={'/login'} className='hidden lg:block'>
                            <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-3 text-sm lg:text-base">
                                Login
                            </Button>
                        </Link>
                }

                <Navbar.Toggle />
            </div>


            <Navbar.Collapse className='text-white'>
                <Navbar.Link active className='text-white'><Link href={'/'}> Home </Link> </Navbar.Link>
                <Navbar.Link className='text-white'><Link href={'/Products'}> Products </Link> </Navbar.Link>

                <Navbar.Link className='text-white'>
                    <Dropdown inline label="Categories" >
                        <Dropdown.Item><Link href={'/Processor'}> Processor </Link> </Dropdown.Item>
                        <Dropdown.Item>  <Link href={'/Motherboard'}> Motherboard </Link> </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/RAM'}> RAM </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/PowerSupply'}> Power Supply Unit </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/StorageDevice'}> Storage Device </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/Monitor'}> Monitor </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/accesorries'}> Others </Link> </Dropdown.Item>

                    </Dropdown>
                </Navbar.Link>

                <Navbar.Link className='text-white' ><Link href={'/about-us'}> About Us</Link> </Navbar.Link>
                <Navbar.Link className='text-white'><Link href={'/contacts'}> Contacts </Link> </Navbar.Link>


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

    );
};

export default Header;