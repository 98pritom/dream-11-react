import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='bg-[#040D11] text-white pt-10 pb-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Logo & Top Section */}
                <div className='flex justify-center mb-8'>
                    <img src={logo} alt="Company Logo" className='w-40 h-auto hover:scale-105 transition-transform' />
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16'>
                    {/* About Us */}
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold mb-4 text-white'>About Us</h2>
                        <p className='text-gray-300 leading-relaxed'>
                            We are a passionate team dedicated to providing the best services to our customers worldwide with innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold mb-4 text-white'>Quick Links</h2>
                        <ul className='space-y-2'>
                            <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 block'>Home</a></li>
                            <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 block'>Services</a></li>
                            <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 block'>About</a></li>
                            <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 block'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold mb-4 text-white'>Subscribe</h2>
                        <p className='text-gray-300 mb-4'>
                            Get the latest updates and offers directly to your inbox.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-2 max-w-xs mx-auto md:mx-0'>
                            <input
                                type="email"
                                placeholder="Your email"
                                className='text-white border border-blue-200 px-4 py-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300 whitespace-nowrap'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className='border-t border-gray-700 mt-12 pt-6 text-center text-gray-400'>
                    <p>© {new Date().getFullYear()} Dream 11. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;