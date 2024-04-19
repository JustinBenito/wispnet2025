import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Schedule = () => {

const speakers = [
{
date: "15.12.2024 ",
title: "Deadline for Full Paper Submission",
bg: "#e4f6f8",
day: "1",
icon: "#0e4c92"
},

{
    date: "20.12.2024 ",
    title: "Notification of Acceptance",

    day: "2",
    bg: "#FED7C2",
    icon: "#FF4C00"
},

{
    date: "25.01.2024 ",
    title: "Final Paper submission date",
    day: "3",
    bg: "#FFCCCB",
    icon: "#610c04"
},

{
    date: "10.02.2024 ",
    title: "Registration Start Date",
    day: "4",
    bg: "#CFFED5",
    icon: "#2DBD01"
},

{
    date: "15.02.2024 ",
    title: "Registration Closing Date",
    bg: "#fffdd0",
    day: "5",
    icon: "#ffd300"
},

{
    date: "20.02.2024 ",
    title: "Conference",
    day: "6",
    bg: "#fff0f5",
  icon: "#551a8b"
},
]


  return (
    <div className='text-center mt-5 mb-8 border-gray-100 max-w-5xl mx-auto gap-2'
    >
    <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>Key Dates</h1>  
    <VerticalTimeline lineColor="lightgray">
        {
            speakers.map((exp,index)=>(
                <React.Fragment key={index} >
                <VerticalTimelineElement
                contentStyle={{
                    background: `${exp.bg}`,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign:"left",
                    padding: "1.3rem"
                
                }}
                date={exp.date}
                
                icon={exp.day}
                iconStyle={{
                  background: `${exp.icon}`,
                  fontWeight: "bold",
                  color:"white",
                  fontSize: "1rem",
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center' // This is added for vertical centering
              }}
              
                contentArrowStyle={{
                    borderRight: `0.4rem solid ${exp.icon}`
                }}
                >

                    <h1 className="!mt-0  text-slate-600 font-bold text-xl">{exp.title}</h1>
                </VerticalTimelineElement>
                </React.Fragment>
            ))
        }
    </VerticalTimeline>
  
  </div>
  );
}

export default Schedule;