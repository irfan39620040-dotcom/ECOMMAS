import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#faf4eaf9] w-full' >
      <header className='  flex h-20 items-center justify-between px-4 max-w-7x1-auto '>

        <div className='flex items-center space-x-2'>

          <img src="/header/logo.svg" alt="logo" className='h-8 ' />
          
        </div>

        <div className='flex items-center '>
          <img src="/header/search.svg" alt="search" className='h-6 w-6 cursor-pointer' />
        </div>

        <div className='relative cursor-pointer'>
          <img src="/header/bag.svg" alt="bag" className='h-6 w-6' />
          <span className='absolute-top-2.5 -right-3  text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-sm'>
            
          </span>

        </div>

        <div>

        <img src="/header/menu.svg" alt="menu" className='h-7 w-7 cursor-pointer' />

        </div>
      </header>

    </div>
  )
}

export default Header