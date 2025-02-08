


import React, { useEffect } from 'react';
import hero from '../assets/Image.png';
import { useNavigate } from "react-router-dom";


const Hero = () => {

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.75) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        } else {
          element.style.opacity = 0;
          element.style.transform = 'translateY(20px)';
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  const navigate = useNavigate();

  return (
    <div
    // style={{
    //   // backgroundImage: `url(${hero})`,
    //   // backgroundImage: 'linear-gradient(to right, #1F221B, #1A2E2F)',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   minHeight: '100vh', // Ensures full screen coverage for smaller screens
    //   width: '100%',
    //   opacity: '80%',
    // }}
    >
      <div className=' relative  '>

        <div className='flex flex-row text-lg m-4  md:m-8 lg:m-20 text-white '>
          <h2>Dear
             <span className="text-green-500">
             [Name],
          </span></h2>
          <br />
          {/* <h2 className='text-green-500'>[Name],</h2> */}
        </div>

        <div className=' m-8  md:m-8 lg:m-20'>
          <img src={hero} alt="" />
        </div>
        {/* Section 1 */}
        <div
          className='flex flex-col md:flex-row m-8  md:m-8 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full'>

            <h4 className='text-sm md:text-base lg:text-lg'>We hope you enjoyed playing & learning while SAVING THE COMPANY from crashing!</h4>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className='flex flex-col md:flex-row m-8  md:m-8 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full  '>

            <h4 className='text-sm md:text-base lg:text-lg'>But this was just a quick taster to show you how learning in gamified simulations can be enjoyable and memorable. </h4>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className='flex flex-col md:flex-row m-8  md:m-8 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full '>
            {/* <h2 className='font-semibold font-serif text-lg md:text-xl lg:text-2xl'>Why Choose Us?</h2> */}
            <h4 className="text-sm md:text-base lg:text-lg">
              How about now learning how to engage with
              <span className="text-green-500">
                10+ unique personalities, building mind maps to break down complex problems and connect the dots to perform boss-impressing jugaads?
              </span>
            </h4>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
