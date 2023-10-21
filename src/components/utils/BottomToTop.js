import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-20 right-5 p-4 bg-primary text-white rounded-full transition-opacity duration-300 `}
        >
            <BsArrowUp className="text-lg lg:text-xl" />
        </button>
    );
}