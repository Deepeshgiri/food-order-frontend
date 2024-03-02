import React from 'react'

function Footer() {
  return (
    <div className='bg-orange-500 py-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
<span className='text-3xl text-white font-bold tracking-tight cursor-pointer'> foodorder.now</span>
<span className='text-white font-bold tracking-tight flex gap-4 cursor-pointer'>
<span>privacy Policy</span>
<span>terms of Services</span>
</span>

        </div>
    </div>
  )
}

export default Footer