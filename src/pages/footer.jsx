import React from 'react';
import insta from './../assets/insta.png'
import facebook from './../assets/facebook.png'
import linkedin from './../assets/linkedin.png'
import twitter from './../assets/twitter.png'

const Footer = () => {
  return (
    <section>


      <div className='w-full flex flex-col md:flex-row text-black'>
        <div className='w-full md:w-1/2 p-8 md:p-28'>
          <h2 className='font-bold mb-4 font-serif underline decoration-testimonial underline-offset-8'>More Renty</h2>
          <ul className='font-light'>
            <li className='p-2 text-gray-900'>FAQ</li>
            <li className='p-2 text-gray-900'>About us</li>
            <li className='p-2 text-gray-900'>Contact Us</li>
            <li className='p-2 text-gray-900'>Feedback</li>
            <li className='p-2 text-gray-900'>Join Our Community</li>
            <li className='p-2 text-gray-900'>Agent support</li>
          </ul>
          <div className='flex flex-row gap-x-5 mt-8'>
            <img src={insta} alt='insta' width={25} />
            <img src={facebook} alt='insta' width={25} />
            <img src={linkedin} alt='insta' width={25} />
            <img src={twitter} alt='insta' width={25} />
          </div>
          <div className='font-thin text-xs mt-8'>
            <p>Carrier Crafters is committed to ensuring digital accessibility for individuals with disabilities.  We are continuously working to improve the accessibility of our web experience for everyone.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-28">
          <h2 className='font-bold mb-4 font-serif underline decoration-testimonial underline-offset-8'>Stay connected</h2>
          <div className='font-thin text-xs mt-8'>
            <p>Sign up for inspiration for nourishing your body, mind and shine from inside. Added bonus: you'll get 10% off your first Renty order.</p>
          </div>
          <input type="email" className="bg-transparent border-none form-input px-4 py-3 mt-8 rounded-lg " placeholder="Email Address" />
          <button className="px-4 py-2 mt-8 border-2 rounded-lg border-blue-500 bg-white text-blue-600 font-semibold text-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:border-gray-100">Subscribe</button>
        </div>
      </div>



      <div className="relative text-black w-full flex flex-col md:flex-row justify-between p-4">
        <div className="mb-4 md:mb-0">
          <p>©uihut.com 2022. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div>
            <h4>Terms of Use</h4>
          </div>
          <div>
            <h4>Terms & Privacy</h4>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Footer;
