"use client"
"use client"
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from './SectionHeading';
import { experiencesData } from '@/lib/data';
import React from 'react';
const Experience = () => {
    const ref = useSectionInView('Experience')
    return (
        <section ref={ref} id='experience' className=' scroll-mt-28 mt-36'>
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor='#e5e7eb'>
                {experiencesData.map((experience) => (
                    <React.Fragment key={experience.title}>
                        <VerticalTimelineElement
                            contentStyle={{
                                visibility: 'visible',
                                background: '#f3f4f6',
                                boxShadow: 'none',
                                textAlign: 'left',
                                border: '1px solid rgba(0,0,0,.05)',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{
                                visibility: 'visible',

                                borderRight: "7px solid #f3f4f6"
                            }}
                            date={experience.date}
                            // dataStyle={{
                            //     textDecoration:'italics'
                            // }}
                            icon={experience.icon}
                            iconStyle={{
                                visibility: 'visible',
                                background: 'white'
                            }}

                        >
                            <h3 className='text-lg font-bold '>{experience.title}</h3>
                            <p className=' !text-gray-500 !text-[.9rem] !font-semibold italic !mt-1'>{experience.location}</p>
                            <p className=''>{experience.description}</p>

                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
                }
            </VerticalTimeline>

        </section>
    );
};

export default Experience;
