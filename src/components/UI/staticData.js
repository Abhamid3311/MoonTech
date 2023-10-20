import { Icon } from '@iconify/react';

export const BannerData = [
    {
        id: "1",
        title: "FASTEST GAMING PROCESSOR",
        subTitle: "FOR ELITE GAMERS",
        desc: "Customize your ORIGIN PC with a new AMD Ryzen 7000 Series X3D processor.",
        descClr: "#C5521C",
        img: "/assets/banner-1.jpg",
        link: "/Products",
        btnText: "Gaming Desktops"
    },
    {
        id: "2",
        title: "FALL INTO",
        subTitle: "HIGH-PERFORMANCE GAMING",
        desc: "Customize a Next-Gen Gaming Desktop or Laptop and Access Limited-Time Savings.",
        descClr: "#ffffff",
        img: "/assets/banner-2.jpg",
        link: "/Products",
        btnText: "Gaming Desktops"
    },
    {
        id: "3",
        title: "BEYOND",
        subTitle: "PERFORMANCE.",
        desc: "New Intel® Core™ i9-13900KS Desktop Processors available now at ORIGIN PC.",
        descClr: "#52ADFB",
        img: "/assets/banner-3.jpg",
        link: "/Products",
        btnText: "Gaming Desktops"
    },
    {
        id: "4",
        title: "PORTABLE AND",
        subTitle: "POWERFUL",
        desc: "New EON14-S and NS-14 Laptops Available Now",
        descClr: "#57CFCE",
        img: "/assets/banner-4.jpg",
        link: "/Products",
        btnText: "Gaming Desktops"
    },
    {
        id: "5",
        title: "ACCELERATED WORKFLOW",
        subTitle: "PERFORMANCE",
        desc: "Advance Your Business or Stay on Top of Your Industry With New Intel Xeon W-3400 Processors.",
        descClr: "#ffffff",
        img: "/assets/banner-5.jpg",
        link: "/Products",
        btnText: "Gaming Desktops"
    },
    /* {
        id: "6",
        title: "BUILT DIFFERENT",
        subTitle: "BUILT FOR CREATORS",
        desc: "Work Smarter and Better With the New ORIGIN PC M-Class Studio Desktop",
        descClr: "#76B900",
        img: "/assets/banner-6.jpg",
        link: "/",
        btnText: "Learn More"
    }, */
];


export const CategoryData = [
    {
        id: 1,
        name: "Processor",
        icon: <Icon icon="game-icons:processor" className='text-2xl ' />,
        link: "/categories/Processor"
    },
    {
        id: 2,
        name: "Motherboard",
        icon: <Icon icon="ph:cpu" className='text-2xl ' />,
        link: "/categories/Motherboard"
    },
    {
        id: 3,
        name: "RAM",
        icon: <Icon icon="game-icons:ram" className='text-2xl ' />,
        link: "/categories/RAM"
    },
    {
        id: 4,
        name: "Power Supply Unit",
        icon: <Icon icon="icon-park-outline:power-supply" className='text-2xl ' />,
        link: "/categories/PowerSupply"
    },
    {
        id: 5,
        name: "Storage Device",
        icon: <Icon icon="clarity:storage-line" className='text-2xl ' />,
        link: "/categories/StorageDevice"
    },
    {
        id: 6,
        name: "Monitor",
        icon: <Icon icon="material-symbols:monitor-outline" className='text-2xl ' />,
        link: "/categories/Monitor"
    },
    {
        id: 7,
        name: "Keyboard",
        icon: <Icon icon="radix-icons:keyboard" className='text-2xl ' />,
        link: "/categories/keyboard"
    },
    {
        id: 8,
        name: "Mouse",
        icon: <Icon icon="material-symbols:mouse-outline" className='text-2xl ' />,
        link: "/categories/mouse"
    },
    {
        id: 15,
        name: "Headphones",
        icon: <Icon icon="ic:outline-headphones" className='text-2xl ' />,
        link: "/categories/headphones"
    },
    {
        id: 13,
        name: "Gaming Console",
        icon: <Icon icon="carbon:game-console" className='text-2xl ' />,
        link: "/categories/gaming-console"
    },
    {
        id: 9,
        name: "TV",
        icon: <Icon icon="iconoir:tv" className='text-2xl ' />,
        link: "/categories/TV"
    },
    {
        id: 10,
        name: "Mobile Phone",
        icon: <Icon icon="clarity:mobile-phone-line" className='text-2xl ' />,
        link: "/categories/Mobile"
    },
    {
        id: 11,
        name: "Smart Watch",
        icon: <Icon icon="fluent:smartwatch-20-regular" className='text-2xl ' />,
        link: "/categories/smart-watch"
    },
    {
        id: 12,
        name: "Camera",
        icon: <Icon icon="mdi:camera-outline" className='text-2xl ' />,
        link: "/categories/Camera"
    },

    {
        id: 14,
        name: "Laptop",
        icon: <Icon icon="ph:laptop" className='text-2xl ' />,
        link: "/categories/Laptop"
    },

]

const data = [
    {
        "id": "1",
        "img": "https://www.startech.com.bd/image/cache/catalog/Motherboard/Gigabyte/GIGABYTE%20GA-J1800M-D3P/GIGABYTE%20GA-J1800M-D3P-1-228x228.jpg",
        "name": "Example Motherboard 1",
        "category": "Motherboard",
        "status": "In Stock",
        "price": "220",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae animi quod odio corrupti iusto magni! Obcaecati, numquam molestias. Eius autem, totam maxime exercitationem consequatur dolorum voluptas in a quo voluptatum!",
        "features": [
            {
                "id": 1,
                "brand": "Ryzen"
            },
            {
                "id": 2,
                "model": "Ryzen 500T"
            },
            {
                "id": 3,
                "specification": "Ryzen"
            },
            {
                "id": 4,
                "Port": "Ryzen"
            },
            {
                "id": 5,
                "Type": "Ryzen"
            },
            {
                "id": 6,
                "Voltage": "220V"
            },

        ],
        "individualRating": 5,
        "averageRating": 4.9,
        "Reviews": [
            {
                "id": 1,
                "comment": "This is a nice product"
            },
            {
                "id": 2,
                "comment": "Great performance and quality!"
            }
        ]
    },
]