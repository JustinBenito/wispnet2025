import React from 'react'

const Contact = () => {
  return (
    <div className='text-center mt-5 mb-8 border-gray-100 max-w-5xl mx-auto gap-2'
    >
    <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>Contact Us</h1>

    <div className=" mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" px-4 bg-gradient-to-br from-blue-700 to-blue-200 text-white rounded-lg shadow-lg">
          <div className="">
            <div className="text-center text-lg mt-4">
              <h5 className="mb-4">
                <p className='font-bold text-xl '>Location <span>📍</span></p>
                
                <span className="ml-2 text-lg opacity-75">Sri Sivasubramaniya Nadar College of Engineering</span>
                <br />
                <span className='text-sm'>Rajiv Gandhi Salai (OMR), <br /> Kalavakkam – 603 110,<br /> Tamil Nadu, India</span>
                <br />
                <span>Phone: 044 2746 9700</span>
              </h5>
              <h5 className="mb-4">
                <p className='font-bold text-xl'>Email ✉️</p>
                
                <a href="mailto:wispnet2025@ssn.edu.in" className="underline opacity-80">Email : wispnet2025@ssn.edu.in</a>
              </h5>
            </div>
            <div>
              <h5 className="text-center text-xl underline font-bold">Conference Organiser </h5>
              <div className="text-left mt-4 mb-4">
           
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 md:mt-0 rounde-lg">
          <iframe
            title="SSN College of Engineering Map"
            className="w-full h-96 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.4253634897605!2d80.19508151491014!3d12.750865091000964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512f04729e11%3A0xbc4ea0ae50ca1aaa!2sSSN+College+of+Engineering!5e0!3m2!1sen!2sin!4v1499677369694"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact