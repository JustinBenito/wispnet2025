import React from 'react'
import IEEEMS from '../assets/ieeems.png'

const Sponsors = () => {
  return (
    <div className='text-center mt-5 mb-8 border-gray-100 max-w-5xl mx-auto gap-2'
    >
    <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>Sponsors</h1>
    
    <div id="topics" className='grid grid-cols-3 flex-wrap justify-center m-2 gap-6'>
    
    <a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://tryengineering.org/wp-content/uploads/bigstock-Blue-Neon-Audio-Sound-Voice-Wa-478617217-1024x410.jpg')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
    class="hover:scale-110 transition-all  ease-in-out  flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img src="https://www.ssn.edu.in/wp-content/uploads/2019/12/ssn-logo-687F0FB88D-seeklogo.png" alt="" className='w-48'/>
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://st2.depositphotos.com/1025323/10161/i/450/depositphotos_101612624-stock-photo-signal-processing-background.jpg')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 flex justify-center items-center transition-all ease-in-out  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img className='flex justify-center items-center' src="https://brand-experience.ieee.org/wp-content/uploads/2019/07/logo-masterbrand-white-transparent.png" alt="" />
</a>

<a 
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4A3kGWSwlKob2hRKrUYdhcWhT-OHHE-Du73HbiLWHoE8glz236vzV5ZAi0IdVby4vDg&usqp=CAU')`,
          backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',
      }}
class="hover:scale-110 transition-all ease-in-out flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className='filter brightness-0 invert'>
    <img src={IEEEMS} alt="" className='filter invert'/>
    </div>
</a>



    </div>

    </div>
  )
}

export default Sponsors