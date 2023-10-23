import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaginationProducts = ({ postPerPage, totalPost, paginate, handlePrevBtn, handleNextBtn, currentPage }) => {
    const pageNumber = [];
    const totalPage = Math.ceil(totalPost / postPerPage);

    //Get Btn
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    };

    return (
        <nav className="flex items-center justify-center lg:justify-end  gap-3 mt-5">
            <button
                className='border-2 border-primary text-primary h-10 w-10 rounded-lg font-bold text-xl cursor-pointer flex items-center justify-center'
                onClick={() => handlePrevBtn()}
                disabled={currentPage <= 1}
            >
                <IoIosArrowBack />
            </button>

            <ul className="flex items-center justify-center gap-3">
                {
                    pageNumber.map(number => (
                        <li key={number} >
                            <button
                                className={`${currentPage === number ? "bg-primary text-white" : "border-2 border-primary text-primary"} hover:bg-primary hover:text-white h-10 w-10  px-3 py-2 rounded-lg text-xl flex items-center justify-center`}
                                onClick={() => paginate(number)}

                            >{number}</button>
                        </li>
                    ))
                }
            </ul>

            <button
                className='border-2 border-primary text-primary h-10 w-10 rounded-lg font-bold text-xl cursor-pointer flex items-center justify-center'
                onClick={() => handleNextBtn()}
                disabled={currentPage >= totalPage}
            >
                <IoIosArrowForward />
            </button>
        </nav>
    );
};

export default PaginationProducts;
