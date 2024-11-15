import React from 'react';

const Testimonials = () => {
  return (
    <section>
      <div className='justify-center h-full'>
        <div className=' flex font-extrabold text-3xl justify-center'>

          <h2 >Testimonials</h2>
        </div>

        <div className='flex flex-row gap-4 m-4'>
          <div className='w-1/3 bg-neutral-400 h-[250px] text-black  rounded-lg'>
            <div className='m-4 '>
              <h2 className='font-serif font-semibold '>Student</h2>
              <p className='font-extralight '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fuga, aperiam eligendi alias nostrum possimus minus quae soluta</p>
              <h3>Rating - 4.5/5</h3>
            </div>

          </div>
          <div className='w-1/3 bg-neutral-400 h-[250px] text-black  rounded-lg'>
            <div className='m-4 '>
              <h2 className='font-serif font-semibold '>Student</h2>
              <p className='font-extralight '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fuga, aperiam eligendi alias nostrum possimus minus quae soluta</p>
              <h3>Rating - 4.5/5</h3>
            </div>

          </div>
          <div className='w-1/3 bg-neutral-400 h-[250px] text-black  rounded-lg'>
            <div className='m-4 '>
              <h2 className='font-serif font-semibold '>Student</h2>
              <p className='font-extralight '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fuga, aperiam eligendi alias nostrum possimus minus quae soluta</p>
              <h3>Rating - 4.5/5</h3>
            </div>

          </div>
         
        </div>
      </div>
    </section>

  );
}

export default Testimonials;
