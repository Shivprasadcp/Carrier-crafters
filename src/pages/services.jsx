import React from 'react';

import tick from '../assets/Vector.png'


const Services = () => {
  return (
    <section>

      {/* <div className='absolute left-0 hidden sm:block'>
        <div className='blur-[100px] -z-20 bg-[#4F7C79] w-64 h-64 rounded-full'></div>
      </div> */}

      <div className=' p-8   '>

        <div className='flex flex-col items-center    w-full h-[480px] rounded-2xl bg-gradient-to-r from-black to-black/29'>
          <h2 className='text-white mt-8 font-semibold text-4xl '>Activate your workplace intelligence</h2>
          <h4 className='font-extralight text-white'>Gain expert mastery over Creative Problem Solving - a superpower for sure shot success at work.</h4>
          <h3 className='text-gray-600 font-medium mt-16'>Unlock Full Access for</h3>
          <h2 className='text-4xl font-bold text-[#9CE325]'>INR 1,599/-  Only</h2>
          <div className='w-48 h-12 rounded-md flex justify-center p-2 font-semibold m-4 bg-[#9CE325] text-black'>
            <span>
              Buy Solve Pack
            </span>
          </div>
          <h4 className='font-extralight  text-[#82D62E]'>[link to same]
            one more line if needed</h4>
        </div>

      </div>


      <div className='p-8 flex flex-col gap-4'>
        <div className='flex'>
          <h2 className=' text-5xl text-white '>Why your workplace intellgience will give you a uinique ege in career growth</h2>

        </div>
        <div className="flex flex-row gap-8">
          <img src={tick} className='w-6 h-7' alt="" />
          <h4 className='text-white font-light text-2xl'>Strong intellectual foundation to tackle 50+ scenarios on your job</h4>
        </div>
        <div className="flex flex-row gap-8">
          <img src={tick} className='w-6 h-7' alt="" />
          <h4 className='text-white font-light text-2xl'>Skill-Insurance against replacement by AI at work</h4>
        </div>
        <div className="flex flex-row gap-8">
          <img src={tick} className='w-6 h-7' alt="" />
          <h4 className='text-white font-light text-2xl'>Scenarios based on wisdom of 1000+ successful professionals</h4>
        </div>
      </div>

    </section>

  );
}

export default Services;
