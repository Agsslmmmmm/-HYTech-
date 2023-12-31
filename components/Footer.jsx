// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 
                    <span className='text-blue-500'>{' <{'}HY<span className='text-purple-600'>Tech{'} />'}</span></span>
                    . All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
