import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


 const Scope = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: { duration: 2,ease: 'easeInOut'  },
  };

  // Trigger the animation when the element is in the viewport
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div className='text-center mt-5 border-gray-100 max-w-screen-xl mx-auto gap-2'
    ref={ref}
    >
            <motion.h1
        className='text-3xl p-4 font-bold border-b-2 mb-6'
        variants={animation}
        initial="initial"
        animate={controls}
        exit="exit"
      >WELCOME TO WISPNET 2024</motion.h1>

<motion.p
        className='text-justify md:text-lg p-4 text-sm'
        variants={animation}
        initial="initial"
        animate={controls}
        exit="exit"
      >
     The 10th edition of the International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET), technically co-sponsored by the IEEE, will be organized by the Department of Electronics and Communication Engineering, Sri Sivasubramaniya Nadar College of Engineering, Chennai-603110, India, from February 20 - 22, 2025. The 3-day conference will feature online and in-person keynote and invited talks, and in-person presentation of accepted contributed papers. The organizers aspire to make the event a professionally and personally rewarding one. To this end, most of the invited speakers will stay through the duration of the conference in the venue to interact with participants. It is also desired that the participants attend most of the sessions and interact with other participants and speakers so as to reap the full benefits of a conference.
     </motion.p>
    <br/>

    </div>

  )
}

export default Scope;