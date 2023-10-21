import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import React, { useEffect, useRef, useState } from 'react';
import { baseUrl } from '@/url';
import { AiOutlineSearch } from 'react-icons/ai';
import { Checkbox, Label } from 'flowbite-react';
import BackToTopButton from '@/components/utils/BottomToTop';

const Products = ({ allproducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedProducts, setSearchedDeals] = useState([]);
    const [selectedProduct, setSelectedCity] = useState([]);
    const inputRef = useRef(null);
    const [searched, setSearched] = useState(false);
    const [priceSliderValue, setPriceSliderValue] = useState(null);


    //Serached Filter Functionality
    useEffect(() => {
        const filteredDeals = allproducts?.filter((book) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            return (
                book.category.toLowerCase().includes(lowerCaseQuery) ||
                book.name.toLowerCase().includes(lowerCaseQuery) ||
                book.status.toLowerCase().includes(lowerCaseQuery) ||
                book.price.toLowerCase().includes(lowerCaseQuery)
            );
        });
        setSearchedDeals(filteredDeals);
        // setCurrentPage(1);

    }, [allproducts, searchQuery]);


    /*  //checkBox Of City Name & Type  Functionality
     useEffect(() => {
         const filteredDeals = allproducts?.filter((book) => {
             const lowerCaseQuery = searchQuery?.toLowerCase();
             const hasMatchingCity = selectedProduct.length === 0 ||
                 selectedProduct.includes(book?.name) ||
                 selectedProduct.includes(book?.category) ||
                 selectedProduct.includes(book?.price) ||
                 selectedProduct.includes(book?.status);
 
             const isWithinPriceRange = parseInt(book.price) <= priceSliderValue;
             return (
                 hasMatchingCity && isWithinPriceRange &&
                 (book.category.toLowerCase().includes(lowerCaseQuery) ||
                     book.name.toLowerCase().includes(lowerCaseQuery) ||
                     book.status.toLowerCase().includes(lowerCaseQuery) ||
                     book.price.includes(lowerCaseQuery)
                 )
             )
         });
 
         setSearchedDeals(filteredDeals);
     }, [allproducts, searchQuery, selectedProduct, priceSliderValue]); */




    //Handle Search Bar Filter
    const handleSearchFilter = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            setSearchQuery(inputRef.current.value);
        }
    };


    //Handle CheckBox Filter
    const handleCheckboxChange = (e) => {
        const { value } = e.currentTarget;
        // console.log(value);

        setselectedProduct((prevselectedCity) => {
            if (prevselectedCity.includes(value)) {
                return prevselectedCity.filter((genre) => genre !== value);
            } else {
                return [...prevselectedCity, value];
            }
        });
    };



    //Handle Price Filter Slider
    const handlePriceSliderChange = (value) => {
        setPriceSliderValue(parseInt(value));
    };





    return (
        <div className='bg-lightBg text-secondary'>
            <div className='text-center pt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-primary'>All Of Our Products</h1>
                <h3 className='text-sm lg:text-base' >Check & Get Your Desired Products!</h3>
            </div>

            <div className='max-w-7xl mx-auto py-10 px-5 lg:px-0'>

                <div className='flex items-center justify-center my-5'>
                    {/*Search Filtering */}
                    <form onSubmit={handleSearchFilter}>
                        <div className="w-52 lg:w-[500px]">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    ref={inputRef}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                    }}
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 rounded-md shadow-md border-l-2 border border-gray-300 focus:ring-primary focus:border-primary "
                                    placeholder="Search Products..." required />

                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    <AiOutlineSearch className="text-2xl" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                        {searchQuery && <p className='text-xs lg:text-sm text-red-500'>Total search result: {searchedProducts?.length}</p>}
                    </form>
                </div>


                <div className='flex flex-col lg:flex-row  items-start gap-5 '>

                    <div className="w-full lg:w-1/5 bg-gray-200 px-2 pt-2 pb-10">
                        <h2 className="text-2xl font-bold text-center mb-10">Filter Products</h2>

                        {/* CheckBox Sorting */}
                        <div className='flex flex-row lg:flex-col gap-5 items-start'>

                            {/* CheckBox Sorting By City Name */}

                            <div className="ml-2">
                                <h2 className="text-lg  text-start">Availability</h2>

                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="Stock"
                                        value="RAM"
                                        checked={selectedProduct.includes("RAM")}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Label htmlFor="Stock">RAM</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="OutofStock"
                                        value="Out of Stock"
                                        checked={selectedProduct.includes("Out of Stock")}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Label htmlFor="OutofStock">Out of Stock</Label>
                                </div>


                                <hr className='bg-primary my-2' />


                            </div>


                            {/*  Check Box Class Type */}
                            {/*  <div>
                                <h2 className="text-lg  text-start">Class Type</h2>
                                <div className="ml-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Economy"
                                            checked={selectedProduct.includes("Economy")}
                                            onChange={handleCheckboxChange}
                                            value={"Economy"} />
                                        <Label htmlFor="Economy">Economy</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Business"
                                            checked={selectedProduct.includes("Business")}
                                            onChange={handleCheckboxChange}
                                            value={"Business"} />
                                        <Label htmlFor="Business">Business</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="Premium-Economy"
                                            checked={selectedProduct.includes("Premium Economy")}
                                            onChange={handleCheckboxChange}
                                            value={"Premium Economy"} />
                                        <Label htmlFor="Premium-Economy">Premium Economy</Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="First-Class"
                                            checked={selectedProduct.includes("First Class")}
                                            onChange={handleCheckboxChange}
                                            value={"First Class"} />
                                        <Label htmlFor="First-Class">First Class</Label>
                                    </div>
                                </div>
                            </div> */}

                        </div>



                        {/* Price Range Sorting */}
                        <div>
                            <div className="mt-8">
                                <label htmlFor="year-slider" className="block text-base font-medium text-gray-700">
                                    Price Range
                                </label>
                                <input
                                    type="range"
                                    id="year-slider"
                                    name="year-slider"
                                    min="800"
                                    max="30000"
                                    step="100"
                                    value={priceSliderValue}
                                    onChange={(e) => handlePriceSliderChange(e.target.value)}
                                    className="mt-1 block w-full "
                                />
                                <p className="text-sm mt-2 text-center">{priceSliderValue}</p>
                            </div>
                        </div>
                    </div>




                    {/* SHowing data */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 w-full lg:w-4/5'>
                        {
                            searchedProducts?.map(product => <ProductCard key={product?._id} product={product} />)
                        }

                    </div>
                </div>



            </div>



           

        </div>
    );
};

export default Products;
Products.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/products`);
    const alldata = await res.json();

    return {
        props: {
            allproducts: alldata,
        }
    }
};