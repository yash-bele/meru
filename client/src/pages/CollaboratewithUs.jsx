import React from 'react'
import collaborateImg from '../assets/Collaborate-with-us/collaborate-hand.jpg'
function CollaboratewithUs() {
  return (

    <main>
    <section className='  bg-cover' style={{ backgroundImage: `url(${ collaborateImg })`, }} >
         <div className=' place-items-center min-h-[100vh] 	 px-4 pt-20 grid grid-cols-2    h-full w-full ' style={{background:'linear-gradient(180deg, rgba(255, 255, 255, 0.671) 4rem, rgba(234,141,141,0) 20%'}}>
         

         <div className='h-full pl-8 pt-12  '>
            <h2 className='text-5xl	  text-white/80 lg:text-7xl   font-extralight '>
            Embrace entrepreneurship today.!
            </h2>
            <p className='text-6xl font-cookie text-black mt-8  '>
            Launch your business within the very same day!

            </p>
          </div>   
        <div >

         <form className='bg-white  flex-col  rounded  p-2 pl-4 w-[fit-content] lg:w-[23rem] '>
            <h2 className='text-2xl mb-2'>Establish A Partnership With Us</h2>
          <label>Enter Full Name</label>  
          <input type="text" className='bg-white  border-2 py-2 px-2 text-md w-80 mb-4' />
          <label>Enter Mobile No</label>  
          <input type="text" className='bg-white  border-2 py-2 px-2 text-md w-80 mb-4' />
          <label>Select City</label>  
          <input type="text" className='bg-white  border-2 py-2 px-2 text-md w-80 mb-4' />


          <button className='py-2 px-4 w-42 text-white text-lg rounded bg-gray-800 my-2 '>Sumbit apllication</button>
        </form>
        </div>

        </div>
    </section>
</main>
  )
}

export default CollaboratewithUs
