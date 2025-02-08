import React from 'react';
import Image from '../assets/Image.png';



const Testimonials = () => {

  const ProjectData = [
    {
      header: "Immersive Learning",
      description: "Master 3 Sub-skills: Asking right questions, Breaking down problems, and Connecting dots.",
      number: 1
    },
    {
      header: "12-Month Support",
      description: "Neuroda co-thinking support for challenges on your actual job.",
      number: 2
    },
    {
      header: "Evaluation",
      description: "Strengths & Areas of improvement evaluation with lifetime viewing access.",
      number: 3
    },
    {
      header: "Certification",
      description: "Professional certification to showcase your problem-solving abilities.",
      number: 4
    },
  ]
  return (
    // <section className='p-8'>
    //   <div className='flex flex-col bg-gradient-to-r from-black to-black/29  w-full md:w-80  my-4 rounded-3xl'>
    //     <div className='flex justify-center mt-4'>
    //       {/* Image */}
    //       <div className='px-4 w-48  md:w-80 '>
    //         <img src={Image} alt="" />
    //       </div>
    //     </div>

    //     {/* <h4 className='text-lg md:text-xl font-semibold'>KJSKDJKKJ</h4> */}
    //     {/* <h4 className='text-lg md:text-xl font-semibold'>{ProjectData.header}</h4> */}
    //     {/* <p className='mt-4 text-sm md:text-base'>SKDKJAKD KADJSKJASLDJSAKA KAJKDSLJKAJDKA KJASKJASD</p> */}
    //     {/* <p className='mt-4 text-sm md:text-base'>{ProjectData.description}</p> */}
    //     {/* <span>{number}</span> */}

    //     {ProjectData.map((item, index) => (
    //       <div  className='text-white  justify-center p-4 '>
    //         <h4 className='text-lg md:text-xl font-semibold'>{item.header}</h4>

    //         <p className='mt-4 text-sm md:text-base'>{item.description}</p>
    //       </div>
    //     ))}

    //   </div>
    // </section>
    <section className="p-8">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 justify-between"> 
        {ProjectData.map((item, index) => (
          <div key={index} className="flex flex-col bg-gradient-to-r from-black to-black/30 w-full md:w-80 my-4 rounded-2xl p-6 text-white">
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img src={Image} alt="" className="w-fit h-fit  " />
            </div>
            {/* Text Content */}
            <div className="flex justify-center">

            <h4 className="text-lg   text-[#] md:text-xl font-medium">{item.header}</h4>
            </div>
            <p className="mt-2 font-light text-sm md:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className='text-white font-light'>Also, attached is <span className='text-[#82D62E]'>your personalized certificate for saving the company.</span> Feel free to share and show off on your LinkedIn!
        </h3>
        <h3 className='text-white font-light'>Neuroda is waiting to share more wisdom with you in the Workverse.
        </h3>
        <div className='w-48 h-12 rounded-md flex justify-center p-2 font-semibold m-4 bg-[#9CE325] text-black'>
            <span>
            View your Certificate
            </span>
          </div>
          <h4 className='font-extralight  text-[#82D62E]'>[link to same]
            <br />
            one more line if needed</h4>
      </div>
      <hr className="border-t-1 border-gray-300 m-4  " style={{ borderColor: '#8282825E' }} />
    </section>

  );
}

export default Testimonials;
