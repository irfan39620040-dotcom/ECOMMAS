import React from 'react'

const Hero = () => {
    return (
        <div className='px-4 py-8 bg-[#f8f5ed54]'>

            <span className='bg-[#dea66e] text-white text-sm font-medium px-3 py-1 rounded-sm inline-block mb-4'> 
                      The original 
                    </span>

            <h1 className='text-4xl md:te xt-5xl font-bold text-[#1F1F1F] leading-tight mb-6'>
                Happiness Comes in The <br />

                Box Of Jewellery </h1>

            <div className='mb-8'>
                <button className='px-8 py-3 bg-[#111C24] text-white text-sm tracking-wider uppercase hover:bg-[#333333] transition-colors'>Shop Now</button  >
            </div >
            <div className='mb-10'>
                <img src="/hero1.jpg" alt="hero" className='w-full object-cover rounded-md' />
            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6  py-4'>

                <div className='flex items-center space-x-4'>
                    <img src="/delivery.svg" alt="delivery"
                        className='w-12 h-12' />
                    <div>

                        <h3 className='font-bold text-lg'>Free Delivery</h3 >
                        <p className='text-gray-500 text-sm'>Orders from all items</p>

                    </div>
                </div>

                   <div className='flex items-center space-x-4'>
                <img src="/return.svg" alt="return"
                 className='w-12 h-12' />
                    

                    <div>
                        <h3 className=' font-bold text-lg'>Return & Refunf</h3>
                        <p className='text-gray-500 text-sm'>Maney  back guarantee</p>
                        </div>
                    </div>

                      <div className='flex items-center space-x-4'>
                <img src="/discount.svg" alt="discount" className='w-12 h-12' />
                      
                      <div>
                        <h3 className='font-bold text-lg'>Member Discount</h3>
                        <p className='text-gray-500'>Onevery order over $140.00</p>
                      </div>
                       </div>

                       <div className='flex items-center space-x-4'>
                <img src="/support.svg" alt="support" className='w-12 h-12' />
                      <div>
                        <h3 className=' font-bold text-lg'>Support 27/7</h3>
                        <p className='text-gray-500 text-sm'>Contact us 24 hours a day</p>
                      </div>

                </div>
            </div>


        </div>
    )
}

export default Hero