"use client"
import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { Variants, animate, motion } from 'framer-motion';

const faedInAnimVariants: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
}

const Skills = () => {
    const ref = useSectionInView('Skills')
    return (
        <section ref={ref} className=' scroll-mt-28 mt-36 container' id='skills'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex-center flex-wrap gap-2 sm:gap-4 '>
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className='px-3 py-2 sm:px-5 sm:py-3 bg-white border-black/[.1] rounded-lg border ' key={skill}
                            initial='initial'
                            whileInView='animate'
                            variants={faedInAnimVariants}
                            transition={{ delay: Math.sqrt(index) * .1 }}
                            viewport={{ once: true }}
                        >
                            {skill}
                        </motion.li>))
                }
            </ul>
        </section>
    );
};

export default Skills;
