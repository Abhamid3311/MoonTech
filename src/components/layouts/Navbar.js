import React from 'react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';

const Header = () => {
    return (
        <Navbar rounded className='bg-secondary text-white'>


            <Navbar.Brand href="https://flowbite-react.com">
                {/*  <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                <span className="self-center whitespace-nowrap text-2xl font-bold text-primary">
                    MoonTech
                </span>
            </Navbar.Brand>


            <div className="flex md:order-2">
                <Button className=''>
                    <Link href={'/pc-builder'}>  PC Builder </Link>
                </Button>
                <Navbar.Toggle />
            </div>


            <Navbar.Collapse className='text-white'>
                <Navbar.Link active  className='text-white'><Link href={'/'}> Home </Link> </Navbar.Link>
                <Navbar.Link className='text-white' ><Link href={'/about'}> About </Link> </Navbar.Link>
                <Navbar.Link  className='text-white'><Link href={'/services'}> Services </Link> </Navbar.Link>

                <Navbar.Link className='text-white'>
                    <Dropdown inline label="Categories" >
                        <Dropdown.Item><Link href={'/Processor'}> Processor </Link> </Dropdown.Item>
                        <Dropdown.Item>  <Link href={'/MotherBoard'}> Motherboard </Link> </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/RAM'}> RAM </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/RAM'}> Power Supply Unit </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/RAM'}> Storage Device </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/RAM'}> Monitor </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/RAM'}> Others </Link> </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

                <Navbar.Link className='text-white'><Link href={'/contact'}> Contact </Link> </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;