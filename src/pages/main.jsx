import React from 'react';
import Hero from './hero';
import Header from './Header';
import Services from './services';
import Testimonials from './testimonials';
import Footer from './footer';

const main = () => {
  return (
    <div className='bg-gradient-to-r from-[#1F221B] to-[#1A2E2F]'>
      <section >
      <Header />
      </section>
      <section id="home">
      <Hero />
      </section>
      <section id="services">
      <Services />
      </section>
      <section id="testimonials">
     
      <Testimonials />

      </section>
      <section id="footer">
      <Footer />
      </section>

     
     


    </div>
  );
}

export default main;
