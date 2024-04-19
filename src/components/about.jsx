import React from 'react'
import SSN from '../assets/1.png'
import SSNCE from '../assets/2.jpeg'
import Chennai from '../assets/chennai.jpg'

const About = () => {
  return (
<div className='text-center flex-col gap-y-16 mt-5 mb-8 border-gray-100 max-w-screen-xl mx-auto '>
    <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>About</h1>

{/* About ECE */}
    <div className='flex flex-col md:flex-row gap-8 justify-between ml-4 mr-4 items-center'>

    <img class="filter w-full brightness-100 h-auto max-w-lg rounded-lg" src={SSN} alt="image description"/>
        <div className='flex flex-col gap-4 '>
            <h1 className='font-bold text-4xl text-center'>ECE Department</h1>
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti minus harum. Veritatis, enim doloremque cupiditate ut id asperiores mollitia eligendi illo, aspernatur, vero ad? Voluptas deleniti similique quos possimus.</p>
        </div>
    </div>

{/* About SSN */}
    <div className='mt-16 flex flex-col md:flex-row gap-8 justify-between ml-4 mr-4 items-center'>
    <div className='flex flex-col gap-4 '>
        <h1 className='font-bold text-4xl text-center'>SSNCE</h1>
        <p className='text-left md:text-right'>Sri Sivasubramaniya Nadar (SSN) College of Engineering, founded by Shiv Nadar, Founder, HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institution, with its diverse and dynamic community of students, faculty and staff, offers a distinctive combination of some of graduate, undergraduate and research programs, and is spread over a sprawling 250 acres of sylvan surroundings.

The institution provides a stimulating environment for the intellectual development and personal growth of students, and equips them with the skills, attitudes and practical experiences that are necessary to take up responsibilities in the society.

The college has a lot in store for the students outside the classroom as well. Students have opportunities to participate in sports, recreational & co-curricular activities.

The institute is home to aesthetically designed buildings with state of the-art computer and internet facilities, seminar halls, auditoriums and well stocked libraries, sports and games fields in addition to an indoor stadium with gymnasium.</p>
    </div>
    <img class="h-full w-full max-w-lg rounded-lg" src={SSNCE} alt="image description"/>
    </div>

{/* About Chennai */}
<div className='mt-16 flex flex-col md:flex-row gap-8 justify-between ml-4 mr-4 items-center'>
    <img class="h-full w-full max-w-lg rounded-lg" src={Chennai} alt="image description"/>
    <div className='flex flex-col gap-4 '>
        <h1 className='font-bold text-4xl text-center'>Chennai</h1>
        <p className='text-left'>SSN College of Engineering (SSNCE) is the outcome of the vision and initiative of Mr. Shiv Nadar, Chairman of HCL Technologies Ltd. The institution was established in 1996 on a sprawling campus of 250 acres on Rajiv Gandhi Salai (OMR) of Chennai. SSN is one of the top E-schools in India and March is the ideal time to host the event at this Institution which is located close to Chennai, the 4th largest Indian city and the 36th metropolitan city the world over, a vibrant multicultural, multilingual and one of the oldest welcoming cities in India that offers visitors a unique experience. Also, some of umpteen interesting tourist locations near the conference venue include, Pondicherry once a French colony, Mahabalipuram that hosts ancient temples and rock carvings of the 7th century, Marina Beach the second longest beach in the world, Semmozhi Poonga, The Huddleston Gardens Of Theosophical Society, Arignar Anna Zoological Park - the first-ever zoo in India, Kapaleeswarar Temple - one of the oldest temples in the city, National Art Gallery, Connemara Public Library that was established in the year 1896, etc.</p>
    </div>
    </div>

</div>
  )
}

export default About