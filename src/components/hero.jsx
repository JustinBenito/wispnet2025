
import img1 from '../assets/4.webp'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { Carousel, Typography, Button } from "@material-tailwind/react";

import React from 'react'
import Heading from './heroheading';

const Hero = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider_height = window.screen.height-200
    console.log(`h-[300px] lg:h-[350px] md:h-[350px] sm:h-[350px] xl:h-[700px] relative z-0`)
//   return (
// <div>
    
//         <Carousel className="h-screen">
//           <div className="relative h-[700px] md:h-[650px] w-full">
//             <img
//               src={img1}
//               alt="image 1"
//               className=" h-[700px] md:h-[650px] w-full object-cover"
//             />
//             <div className="absolute inset-0 grid  w-full place-items-center bg-black/75">
//               <div className="w-3/4 text-center md:w-2/4">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className="mb-4 mt-[-150px] sm:mt-0 text-2xl md:text-3xl lg:text-4xl"
//                 >
//                   International Conference on Wireless Communications
// Signal Processing and Networking

//                 </Typography>
//                 <Typography
//                   variant="h2"
//                   color="white"
//                   className="mb-12 text-lg md:text-xl lg:text-2xl opacity-80"
//                 >
//                  (Technically Co-Sponsored by the IEEE)
//                 </Typography>
//                 <div className="flex mt-[-30px] justify-center gap-2">
//                   <Button size="lg" color="white" onClick={()=>{console.log("register")}}>
//                     Register
//                   </Button>
//                   <Button size="lg" color="white" variant="text">
//                     Know more
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[700px] md:h-[650px] w-full">
//             <img
// src={img2}              
// alt="image 2"
//               className="h-[700px] md:h-[650px]  w-full object-cover"
//             />
//              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//               <div className="w-3/4 text-center md:w-2/4">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//                 >
//                   The Beauty of Nature
//                 </Typography>
//                 <Typography
//                   variant="lead"
//                   color="white"
//                   className="mb-12 opacity-80"
//                 >
//                   It is not so much for its beauty that the forest makes a claim
//                   upon men&apos;s hearts, as for that subtle something, that quality
//                   of air that emanation from old trees, that so wonderfully changes
//                   and renews a weary spirit.
//                 </Typography>
//                 <div className="flex justify-center gap-2">
//                   <Button size="lg" color="white">
//                     Explore
//                   </Button>
//                   <Button size="lg" color="white" variant="text">
//                     Gallery
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[700px] md:h-[650px] w-full">
//             <img
// src={img3}
//               alt="image 3"
//               className="h-[700px] md:h-[650px] w-full object-cover"
//             />
//              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//               <div className="w-3/4 text-center md:w-2/4">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//                 >
//                   The Beauty of Nature
//                 </Typography>
//                 <Typography
//                   variant="lead"
//                   color="white"
//                   className="mb-12 opacity-80"
//                 >
//                   It is not so much for its beauty that the forest makes a claim
//                   upon men&apos;s hearts, as for that subtle something, that quality
//                   of air that emanation from old trees, that so wonderfully changes
//                   and renews a weary spirit.
//                 </Typography>
//                 <div className="flex justify-center gap-2">
//                   <Button size="lg" color="white">
//                     Explore
//                   </Button>
//                   <Button size="lg" color="white" variant="text">
//                     Gallery
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Carousel>
// </div>
return (
<div className='relative flex flex-col justify-center items-center '>
{/* 1st Component */}

    <Heading />

{/* 2nd Component */}
<AutoplaySlider 
organicArrows={false}
play={true}
mobileTouch={true}
cancelOnInteraction={false} // should stop playing on user interaction
interval={2000}
bullets={false}
animation="cubeAnimation" 

className={`h-[300px] lg:h-[350px] md:h-[350px] sm:h-[350px] xl:h-[700px] relative z-0`} >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
  </AutoplaySlider>
 </div>
  )
}

export default Hero

