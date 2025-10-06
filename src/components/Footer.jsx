import React from 'react'

const Footer = () => {
  return (
    <section className='bg-white w-full'>
  <div className='grid md:grid-cols-2 md:items-center gap-6 px-6 md:px-24 py-14 w-full'>
    
    {/* Left links */}
    <div className='flex gap-6 md:gap-10'>
      <a href="#" className='text-bg-darkest hover:underline'>Privacy Policy</a>
      <a href="#" className='text-bg-darkest hover:underline'>Terms of Service</a>
      <a href="#" className='text-bg-darkest hover:underline'>Contact</a>
    </div>

    {/* Right copyright */}
    <div className='flex justify-center md:justify-end'>
      &copy; {new Date().getFullYear()} EventUp | All rights reserved
    </div>
  </div>
</section>

  )
}

export default Footer