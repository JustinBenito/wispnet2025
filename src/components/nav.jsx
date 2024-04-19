import React, { useState } from 'react';
import Wispnet from '../assets/Wispnet_Logo_blue.png'
const Nav = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSchedule = () => {
    window.open("https://drive.google.com/file/d/1-GbMdBgcVwIVPU-dUqHPI7nZLZuhpOzl/view?usp=sharing", '_blank')
  }

  const onRegister = () => {
    window.open("https://forms.gle/3bmMTgevnjDpcYUZA", '_blank')
  }


  return (
    <>
      <nav className="bg-white border-b-4 border-[#005197] dark:bg-gray-900">
        <div className="max-w-screen-xl gap-4 flex flex-row  items-center justify-center mx-auto p-4">
          <a href="https://www.ssn.edu.in/" className="flex items-center">
            <img
              src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg"
              className="md:w-32 md:h-16 w-24"
              alt="SSN Logo"
            />
          </a>
          <div className="flex-col flex text-center">
            <h1 className="md:text-5xl font-bold text-xl text-[#005197]">
              Sri Sivasubramaniya Nadar <br />
              College of Engineering
            </h1>
            <h1 className="md:text-xl font-bold text-sm">
              Department of Electronics and Communication
            </h1>
          </div>
          <a href="https://signalprocessingsociety.org/community-involvement/seasonal-schools" className="flex items-center">
            <img
              src={Wispnet}
              className="w-12 md:w-24 "
              alt="IEEE SPS Logo"
            />
          </a>
        </div>
      </nav>

      <nav className="bg-slate-100 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto  sm:text-base">
        <ul className="flex flex-row justify-between items-center w-full font-medium  text-sm">
            <li className='ml-4 text-[10px] md:text-xs  text-center'>
                <a onClick={()=>{console.log('home')}} className="text-gray-900 dark:text-white hover:underline font-bold capitalize " aria-current="page">HOME</a>
            </li>
            <li className='ml-4 text-[10px] md:text-xs  text-center'>
                <a onClick={()=>{console.log('home')}} className="text-gray-900 dark:text-white hover:underline font-bold capitalize">SPEAKERS</a>
            </li>
            <li className='ml-4 text-[10px] md:text-xs  text-center'>
                <a onClick={openSchedule} href="#" className="text-gray-900 dark:text-white hover:underline font-bold capitalize">ABOUT THE EVENT</a>
            </li>
            <li className='ml-4 text-[10px] md:text-xs  text-center'>
                <a onClick={onRegister} href="#" className=" text-gray-900 dark:text-white hover:underline font-bold capitalize">REGISTER</a>
            </li>
            <li className='ml-4 text-[10px] md:text-xs  text-center'>
                <a onClick={()=>{console.log('home')}} href="#" className=" text-gray-900 dark:text-white hover:underline font-bold capitalize">HOW TO REACH SSN ?</a>
            </li>
        </ul>
    </div>
</nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-2 transition-opacity ease-in-out">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

          <div className="modal-container flex-col relative  bg-white w-96 mx-auto rounded-lg transition-opacity ease-in-out shadow-lg z-50 p-4">
          <button
                className="modal-close absolute font-bold right-2 top-3 mb-4 text-black hover:text-gray-700"
                onClick={closeModal}
              >
                x
              </button>
            <div className="modal-content  ">
              <h2 className="text-2xl font-semibold ">You will be Updated Shortly...</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default  Nav;