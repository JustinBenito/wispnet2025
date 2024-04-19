import React, { useState } from 'react';
import Wispnet from '../assets/Wispnet_Logo_blue.png'

import Hero from '../components/hero'
import Scope from '../components/scope'
import Speakers from '../components/speakers'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import About from './about';
import Committe from './committe';
import Schedule from './timeline';
import CFP from './cfp';
import Contact from './contact';
const Nav = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

    const [visible, setVisible]=useState('home')


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
    window.open("https://www.wispnet2024.org/home.html", '_blank')
  }


  return (
    <>
      <nav className="bg-white w-full  dark:bg-gray-900">
        <div className="max-w-screen-xl gap-4 flex flex-row  items-center justify-between mx-auto ">
          <a href="https://www.ssn.edu.in/" className="flex items-center">
            <img
              src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg"
              className="md:w-32 md:h-16 w-24"
              alt="SSN Logo"
            />
          </a>
          <div className="flex-col flex text-center ">
            <h1 className="lg:text-3xl font-bold md:text-3xl  text-md text-[#005197]">
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
              className="w-12 md:w-20 "
              alt="IEEE SPS Logo"
            />
          </a>
        </div>
      </nav>

      <nav className="bg-[#005197] text-white dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-4 mx-auto text-[8px]">
        <ul className="flex flex-row justify-between items-center w-full font-medium text-[8px] md:text-sm">
        <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('home')}} href="#" className="text-white dark:text-white hover:underline font-bold capitalize">HOME</a>
            </li>
        
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('about')}} href="#" className="text-white dark:text-white hover:underline font-bold capitalize">ABOUT</a>
            </li>
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('committee')}} href="#"  className="text-white dark:text-white hover:underline font-bold capitalize">COMMITTEE</a>
            </li>
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('timeline')}} href="#" className=" text-white dark:text-white hover:underline font-bold capitalize">KEY DATES</a>
            </li>
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('cfp')}} href="#" className=" text-white dark:text-white hover:underline font-bold capitalize">FOR AUTHORS</a>
            </li>
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={onRegister} href="#" className=" text-white dark:text-white hover:underline font-bold capitalize">PREVIOUS EDITIONS</a>
            </li>
            <li className='ml-4 text-[6px] md:text-xs  text-center'>
                <a onClick={()=>{setVisible('contact')}} href="#" className=" text-white dark:text-white hover:underline font-bold capitalize">CONTACT US</a>
            </li>
        </ul>
    </div>
</nav>

    

    { visible=='home' && <>
    <Hero />
    <Scope />
     <Speakers />
     <Sponsors />
     </> }

     { visible=='about' && <>
    <About />
     </> }

     { visible=='committee' && <>
    <Committe />
     </> }

     { visible=='timeline' && <>
    <Schedule />
     </> }

     { visible=='cfp' && <>
    <CFP />
     </> }

     { visible=='contact' && <>
    <Contact />
     </> }

     
     
     <Footer />
    </>
  );
};

export default  Nav;