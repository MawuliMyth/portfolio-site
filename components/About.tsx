"use client"
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image'

const About = () => {
	const ref = useSectionInView('About', 15);
	return (
		<motion.section
			ref={ref}
			id='about'
			className=' my-28 px-3  scroll-mt-28 max-w-[45rem] text-center leading-8 sm:mb-40'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: .17 }}
		>
			<SectionHeading>
				About Me
			</SectionHeading>

			<p className="mb-4 text-base leading-relaxed ">
				A passionate <span className="font-medium">Flutter developer</span> with strong expertise in
				cross-platform app development, RESTful API integration, UI/UX design, and advanced state
				management techniques including <span className="italic">Provider</span> and <span className="italic">BLoC</span>.
				Experienced in building scalable, high-performance mobile applications and optimizing for both speed
				and responsiveness across devices.
			</p>

			<p className="mb-4 text-base leading-relaxed ">
				Proven ability to integrate third-party libraries, manage real-time data with
				<span className="italic">Firebase</span>, and debug complex issues to deliver seamless user experiences.
				An agile, collaborative developer who stays current with evolving industry trends and consistently
				delivers clean, maintainable code.
			</p>

			<p className="text-base leading-relaxed ">
				If you're looking for a results-driven Flutter developer who can bring your app to life and exceed
				expectations, I’m ready to collaborate. Let’s turn your idea into reality.
			</p>
		</motion.section >
	);
};

export default About;
