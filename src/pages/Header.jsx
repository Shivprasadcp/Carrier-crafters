import React from 'react';
import logo from "../assets/Workverse.png"
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
    <nav className=" border-gray-200   py-2  ">
      <div className=" flex justify-center ">
        {/* Logo or Brand */}
        <a href="/" >
          <img src={logo} className="h-8 mr-3" alt="Logo" />
        </a>


         
      </div>
      <hr className="border-t-1 border-gray-300 m-4  " style={{ borderColor: '#8282825E' }} />
    </nav>
  );
};

export default Header;
