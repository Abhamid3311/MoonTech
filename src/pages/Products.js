import ProductCard from '@/components/UI/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import React, { useEffect, useRef, useState } from 'react';
import { baseUrl } from '@/url';
import { AiOutlineSearch } from 'react-icons/ai';
import { Checkbox, Label, Pagination } from 'flowbite-react';
import PaginationProducts from '@/components/utils/Pagination';

const uniqueCategories = ["RAM", "Monitor", "Motherboard", "Processor", "Power Supply Unit", "Storage Device", "keyboard", "mouse", "headphones", "Accessories"]

const Products = ({ allproducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedProducts, setSearchedDeals] = useState([]);
    const inputRef = useRef(null);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [maxPrice, setMaxPrice] = useState(15000);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);




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

    }, [allproducts, searchQuery]);




    useEffect(() => {
        const filteredProducts = allproducts?.filter((product) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            const productPrice = parseFloat(product.price);

            return (
                (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
                (selectedStatus.length === 0 || selectedStatus.includes(product.status)) &&
                (productPrice <= maxPrice) && // Check if the product price is less than or equal to the maximum price
                (product.category.toLowerCase().includes(lowerCaseQuery) ||
                    product.name.toLowerCase().includes(lowerCaseQuery) ||
                    product.status.toLowerCase().includes(lowerCaseQuery) ||
                    product.price.toLowerCase().includes(lowerCaseQuery))
            );
        });

        setSearchedDeals(filteredProducts);
    }, [allproducts, searchQuery, selectedCategories, selectedStatus, maxPrice]);





    //Handle Search Bar Filter
    const handleSearchFilter = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            setSearchQuery(inputRef.current.value);
        }
    };




    ///Filter

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const toggleStatus = (status) => {
        if (selectedStatus.includes(status)) {
            setSelectedStatus(selectedStatus.filter(s => s !== status));
        } else {
            setSelectedStatus([...selectedStatus, status]);
        }
    };


    //Get Current posts
    const totalProducts = searchedProducts.length;

    // Get the current page products
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = searchedProducts.slice(indexOfFirstPost, indexOfLastPost);


    //Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    };
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0);
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

                            {/* CheckBox Sorting By Availability */}

                            <div className="ml-2">
                                <h2 className="text-lg text-start">Availability</h2>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="InStock"
                                        checked={selectedStatus.includes("In Stock")}
                                        onChange={() => toggleStatus("In Stock")}
                                        value="In Stock"
                                    />
                                    <Label htmlFor="InStock">In Stock</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="OutofStock"
                                        checked={selectedStatus.includes("Out of Stock")}
                                        onChange={() => toggleStatus("Out of Stock")}
                                        value="Out of Stock"
                                    />
                                    <Label htmlFor="OutofStock">Out of Stock</Label>
                                </div>
                            </div>



                            {/* CheckBox Sorting By Category */}

                            <div className="ml-2">
                                <h2 className="text-lg text-start">Category</h2>
                                {uniqueCategories.map(category => (
                                    <div key={category} className="flex items-center gap-2">
                                        <Checkbox
                                            id={category}
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => toggleCategory(category)}
                                            value={category}
                                        />
                                        <Label htmlFor={category}>{category}</Label>
                                    </div>
                                ))}
                            </div>

                        </div>



                        {/* Price Range Sorting */}
                        <div>
                            <div className="mt-8">
                                <label htmlFor="price-slider" className="block text-base font-medium text-gray-700">
                                    Price Range (0 to {maxPrice} Tk)
                                </label>
                                <input
                                    type="range"
                                    id="price-slider"
                                    name="price-slider"
                                    min="800"
                                    max="15000" // Set the maximum value based on your requirements
                                    step="100"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                    className="mt-1 block w-full"
                                />
                            </div>
                        </div>
                    </div>




                    {/* SHowing data */}
                    <div className='w-full lg:w-4/5 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 place-items-center'>
                            {
                                currentPosts?.map(product => <ProductCard key={product?._id} product={product} />)
                            }

                        </div>

                        <PaginationProducts
                            currentPage={currentPage}
                            postPerPage={postPerPage}
                            totalPost={totalProducts}
                            handlePrevBtn={handlePrevBtn}
                            handleNextBtn={handleNextBtn}
                            paginate={paginate}
                        />



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