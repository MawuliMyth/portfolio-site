"use client"

 import React, { useRef } from 'react';
 import {motion, useScroll, useTransform} from 'framer-motion'
 import SectionHeading from './SectionHeading';
 import { projectsData } from '@/lib/data';
 import Image from 'next/image';
import Link from 'next/link';
 

type ProjectProps=typeof projectsData[number];

const Project=({title,tags,description,imageUrl,link}:ProjectProps)=>{
 	const ref=useRef<HTMLDivElement>(null);
 	const {scrollYProgress} = useScroll({
 		target:ref,
 		offset:["0 1","1.33 1"]
 	})
 	const scaleProgress=useTransform(scrollYProgress,[0,1],[.8,1])
 	const opacityProgress=useTransform(scrollYProgress,[0,1],[.6,1])

 	return(
 		<motion.div
 			ref={ref}
	 		style={{
	 				scale:scaleProgress,
	 				opacity:opacityProgress,
	 			}}  
	 		className='group'
 		>
			<Link href={link}>
				<article 
					className='bg-gray-100 hover:bg-gray-200 w-full group rounded-l-lg border border-black/5 overflow-hidden sm:pr-8 relative min-h-[15rem] sm:min-h-[20rem] p-10 flex group group-even:justify-end transition duration-100'>
					<div className=' group-even:text-end top-8 max-w-[52%] sm:max-w-[50%] flex flex-col'> 
						<h3 className='text-xl sm:text-2xl  font-semibold'>{title}</h3>
						<p className=' text-sm sm:text-lg flex-1 mt-2 leading-relaxed text-gray-700'>
							{description}
						</p>
						<ul className='flex group-even:justify-end flex-wrap mt-4 gap-2 sm:mt-auto'>
						{tags.map(tag=>(
							<li className=' text-xs sm:text-lg text-white rounded-full bg-gray-700 px-2 py-1 sm:px-3 sm:py-2' key={tag}>{tag}</li>))}
						</ul>
					</div>
					<Image 
						className='absolute object-cover top-8 -right-60  sm:-right-40 w-[28.25rem] shadow-2xl rounded-t-lg group-even:right-[initial]
							group-hover:-rotate-3
							group-even:sm:-left-40
							group-even:-left-60
							group-hover:-translate-x-5 
							group-hover:scale-105
							group-even:group-hover:rotate-3
							group-even:group-hover:translate-x-5 
							transition '
						quality={95}
						alt='My Project'
						src={imageUrl}
					/>
				</article>
			 </Link>
 		</motion.div>
 		
 	);
 }

 export default Project;