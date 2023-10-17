import React from 'react';
import monitor from '../assets/image/monitor.png';
import mobile from '../assets/image/mobile.png';
import ux from '../assets/image/ux.png';

const Services = () => {
  return (
    <div className='bg-[#0B1926] w-full h-screen pt-7'>
      <div className='max-w-[1240px] mx-auto flex justify-around'>
        {/* Service 1 */}
        <div className='text-center flex flex-col items-center w-[311.4px]'>
          <div className='rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center'>
            <img src={monitor} alt='Monitor Icon' />
          </div>
          <div className='mt-3 text-white'>
            <div className='text-[#01F38D] font-darker-grotesque text-2xl font-black'>Web Design</div>
            <div className='font-normal text-sm leading-6 p-1'>Crafting websites that convert and grow your business</div>
          </div>
        </div>

        {/* Service 2 */}
        <div className='text-center flex flex-col items-center w-[311.4px]'>
          <div className='rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center'>
            <img src={mobile} alt='Mobile Icon' />
          </div>
          <div className='mt-3 text-white'>
            <div className='text-[#01F38D] font-darker-grotesque text-2xl font-black'>App Design</div>
            <div className='font-normal text-sm leading-6 p-1'>Beautifully designed apps that your users will love to use</div>
          </div>
        </div>

        {/* Service 3 */}
        <div className='text-center flex flex-col items-center w-[311.4px] '>
          <div className='rounded-full bg-[#003128] w-[100px] h-[100px] flex items-center justify-center'>
            <img src={ux} alt='UX Icon' />
          </div>
          <div className='mt-3 text-white'>
            <div className='text-[#01F38D] font-darker-grotesque text-2xl font-black'>UX Audit</div>
            <div className='font-normal text-sm leading-6 p-1'>Get a detailed UX report on your marketing website</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
