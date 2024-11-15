import React from 'react';
import test from '../assets/Test1.png'
import analysis from '../assets/Analysis.png'
import roadmap from '../assets/Roadmap.png'


const Services = () => {
  return (
    <section>

      <div className='absolute left-0 hidden sm:block'>
        <div className='blur-[100px] -z-20 bg-[#4F7C79] w-64 h-64 rounded-full'></div>
      </div>

      <div>
        <div className='flex flex-row gap-48 m-20'>
          {/* left*/}
          <div className='w-1/2'>
            <h2 className='font-semibold font-serif'>Take the Test</h2>
            <h4>Unlock your potential with our comprehensive aptitude test. Designed to assess your strengths and interests, this test will guide you toward careers that align with your natural abilities. Start your journey with just a few clicks!</h4>
          </div>

          {/*Right */}
          <div>
            <img src={test} alt='Test- img' style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>



        <div className='flex flex-row gap-20 m-20'>
          {/* left*/}

          <div>
            <img src={analysis} alt='Test- img' style={{ width: '300px', height: 'auto' }} />
          </div>
          {/*Right */}
          <div className='absolute right-0 hidden sm:block'>
            <div className='blur-[100px] -z-20 bg-[#996D3C] w-64 h-64 rounded-full'></div>
          </div>
          <div className='w-1/2'>
            <h2 className='font-semibold font-serif'>Personalized Analysis</h2>
            <h4>Get detailed insights from your test results. Our intelligent analysis highlights your key strengths, matches them with career options, and provides actionable feedback to help you make informed decisions about your future.</h4>
          </div>
        </div>


        <div className='absolute left-0 hidden sm:block'>
            <div className='blur-[100px] -z-20 bg-[#8BF8EE] w-64 h-64 rounded-full'></div>
          </div>
        <div className='flex flex-row gap-48 m-20'>
          {/* left*/}
          <div className='w-1/2'>
            <h2 className='font-semibold font-serif'>Career Roadmap</h2>
            <h4>Discover your ideal career path and follow a step-by-step roadmap designed just for you. From necessary skills and qualifications to career progression, we outline everything you need to achieve success in your chosen field.</h4>
          </div>

          {/*Right */}
          <div>
            <img src={roadmap} alt='Test- img' style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>
      </div>

    </section>

  );
}

export default Services;
