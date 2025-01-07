"use client"

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";




const Projects = () => {
        const ref = useSectionInView('Projects', 40)
        return (
                <section ref={ref} id="projects" className=' scroll-mt-28  flex-center flex-col w-full max-w-[42rem]'>
                        <SectionHeading>My Projects</SectionHeading>
                        <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                                {
                                        projectsData.map(project => (
                                                <React.Fragment key={project.title}>
                                                        <Project {...project} />
                                                </React.Fragment>
                                        ))
                                }
                        </div>
                </section>
        );
};

export default Projects;
