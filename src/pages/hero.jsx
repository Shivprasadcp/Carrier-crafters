


import React, { useEffect } from 'react';
import hero from '../assets/Hero.jpg';
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
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures full screen coverage for smaller screens
        width: '100%',
        opacity: '80%',
      }}
    >
      <div className='relative top-10 p-4 md:p-8 lg:p-12'>
        {/* Section 1 */}
        <div
          className='flex flex-col md:flex-row text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full md:w-1/2'>
            <h2 className='font-semibold font-serif text-lg md:text-xl lg:text-2xl'>Unlock Your Future with Smart Career Choices</h2>
            <h4 className='text-sm md:text-base lg:text-lg'>Find your ideal career path with our powerful aptitude testing, personalized insights, and step-by-step roadmaps.</h4>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className='flex flex-col md:flex-row m-8 md:m-16 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full md:w-1/2 absolute right-0'>
            <h2 className='font-semibold font-serif text-lg md:text-xl lg:text-2xl'>Welcome to Career Crafters</h2>
            <h4 className='text-sm md:text-base lg:text-lg'>At Career Crafters, we help you discover careers that match your unique skills and passions.</h4>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className='flex flex-col md:flex-row m-8 md:m-16 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full md:w-1/2'>
            <h2 className='font-semibold font-serif text-lg md:text-xl lg:text-2xl'>Why Choose Us?</h2>
            <h4 className='text-sm md:text-base lg:text-lg'>
              Accurate Results: Scientifically designed tests that provide in-depth, personalized analysis.
              Career Clarity: Find careers that truly suit you based on your unique strengths and interests.
            </h4>
          </div>
        </div>

        {/* Section 4 */}
        <div
          className='flex flex-col md:flex-row m-8 md:m-16 lg:m-20 text-white scroll-animate'
          style={{
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className='w-full md:w-1/2 absolute right-0'>
            <h2 className='font-semibold font-serif text-lg md:text-xl lg:text-2xl'>Ready to Take the First Step?</h2>
            <h4 className='text-sm md:text-base lg:text-lg'>Your future is waiting! Take our aptitude test today and start shaping your career with confidence.</h4>
          </div>
        </div>

        <div>
          <button onClick={() => (window.location.href = "http://127.0.0.1:8000/login/")} type='submit' className=' rounded-full p-4 mx-10 bg-white text-black hover:bg-gray-500 hover:scale-105 hover:text-white' >Start the test</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
