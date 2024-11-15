import React from 'react';
import logo from "../assets/Logo.png"
import { useState } from 'react';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-gray-200 px-4 py-2.5 rounded shadow-md">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Logo or Brand */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
        </a>

        {/* Hamburger Menu for Mobile */} 
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg" */}
          {/* >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a href="/#home"  onClick={(e) => handleScroll(e, 'home')} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/#services"  onClick={(e) => handleScroll(e, 'services')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
            </li>
            <li>
              <a href="/#testimonials"  onClick={(e) => handleScroll(e, 'testimonials')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Testimonials</a>
            </li>
            <li>
              <a href="/#footer"  onClick={(e) => handleScroll(e, 'footer')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact us</a>
            </li>
            <li>
              <a onClick={() => (window.location.href = "http://127.0.0.1:8000/login/")} href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Login</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
