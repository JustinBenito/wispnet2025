import React, { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import Placeholder from '../assets/placeholder.webp'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakersData = [
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  {
    name: "Speaker",
    imagePath: Placeholder,
    designation: "TBA",
    college: "SSN College of Engineering",
    profile: "https://www.ssn.edu.in/"
  },
  
];

const Speakers = React.forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(Array(speakersData.length).fill(false));
  const controls = useAnimation();

  const handleMouseEnter = (index) => () => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = [...prevIsFlipped];
      newIsFlipped[index] = true;
      return newIsFlipped;
    });
  };

  const handleMouseLeave = (index) => () => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = [...prevIsFlipped];
      newIsFlipped[index] = false;
      return newIsFlipped;
    });
  };

  const [refInView, inView] = useInView({
    triggerOnce: true, // This ensures that the animation only triggers once
  });

  useEffect(() => {
    if (inView) {
      // Define the stagger duration and delay
      const staggerDuration = 0.2; // in seconds
      const staggerDelay = 0.1; // in seconds

      // Animate the speakers with a stagger effect
      controls
        .start((i) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeInOut' },
          delay: i * staggerDelay,
        }))
        .then(() => {
          // You can add any callback logic here if needed
        });
    }
  }, [controls, inView]);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className='max-w-5xl mx-auto' ref={refInView} id="speaker">
      <h1 className='text-3xl text-center p-4 font-bold mt-5 border-b-2' >Speakers</h1>
      {inView && (
        <motion.div className='flex flex-wrap justify-center' ref={ref}>
          {speakersData.map((speaker, index) => (
            <motion.div
              key={index}
              className='text-center mx-4 my-4'
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave(index)}
              initial={{ opacity: 0, y: 200 }}
              animate={controls}
              custom={index} // Pass the index as a custom prop
            >
      <a href={speaker.profile} target="_blank" rel="noopener noreferrer">
              <ReactCardFlip
                isFlipped={isFlipped[index]}
                flipDirection="horizontal"
                containerStyle={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Front of the card */}
                <div>

                  <div
                    className='w-64 h-64 rounded-full overflow-hidden cursor-pointer'
                  >
                    <img
                      src={speaker.imagePath}
                      alt={speaker.name}
                      href={speaker.profile}
                      className='object-cover w-full h-full'
                    />
                    
                  </div>
                  <p className='text-xl font-semibold text-black'>{speaker.name}</p>

                </div>

                {/* Back of the card */}
                <div>
                <div className='flex p-8 flex-col justify-center items-center bg-[#005197] gap-3 rounded-full w-64 h-64 overflow-hidden'>
                  <p className='text-lg text-white font-semibold overflow-auto'>{speaker.name}</p>
                  <p className='text-lg text-white opacity-40'>{speaker.designation}</p>
                  <p className='text-md text-black'>{speaker.college}</p>
                  {isMobile && (
                    <button onClick={handleMouseLeave(index)} className='bg-white p-1 rounded-lg'>Click to flip</button>
                  )}
                </div>
                <p className='text-xl font-semibold text-black'>{speaker.name}</p>
                </div>
              </ReactCardFlip>
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
});

export default Speakers;