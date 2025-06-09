"use client"

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


type ProjectProps = typeof projectsData[number];
type ImageCyclerProps = {
	images: StaticImageData[];
	className: string;
}

const ImageCycler = ({ images, className }: ImageCyclerProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [changingToNext, setChangingToNext] = useState(true)
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();

	useEffect(() => {
		const element = containerRef.current;
		if (!element) return;
		const handleScroll = (e: Event) => {
			// Prevent the page from scrolling
			e.preventDefault();
			e.stopPropagation();

			// Calculate a scroll-based value (e.g., scroll progress)
			// Trigger animation based on scroll progress
			const dir = scrollY.getVelocity();
			if (Math.abs(dir) > 200) {
				if (dir > 1) {
					setChangingToNext(true);
					setSelectedIndex(prev => prev + 1)
				}
				else {
					setChangingToNext(false)
					setSelectedIndex(prev => prev - 1)
				}

			}

		};

		// Attach scroll event listener to the specific element
		element.addEventListener("scroll", handleScroll, { passive: false });

		return () => {
			element.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className={className} ref={containerRef}>
			<AnimatePresence>
				<motion.div
					key={selectedIndex}
					variants={{
						left: {
							rotate: 90,
							opacity: 0,
						},
						visible: {
							rotate: 0,
							opacity: 1
						},
						right: {
							rotate: -90,
							opacity: 0
						}
					}}

					initial={changingToNext ? 'left' : 'right'}
					animate='visible'
					exit={!changingToNext ? 'left' : 'right'}
					className='origin-bottom-left'
				>
					<Image
						className='object-cover sm:-right-40 w-[28.25rem] shadow-2xl rounded-t-xl '
						quality={95}
						alt='My Project'
						src={images[selectedIndex]}
					/>
				</motion.div>
			</AnimatePresence>

		</div >
	)
}
const Project = ({ title, tags, description, imageUrl, link }: ProjectProps) => {

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"]
	})
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [.8, 1])
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [.6, 1])

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className='group'
		>
			<Link href={link}>
				<article
					className='hover:bg-transparent  bg-white/10 w-full group rounded-xl border border-white/10 overflow-hidden sm:pr-8 relative min-h-[40rem] p-10 flex group group-even:justify-end transition duration-100 group-even:bg-white/5 group-even:hover:bg-transparent'>

					<div className=' group-even:text-end top-8 max-w-[52%] sm:max-w-[50%] flex flex-col'>
						<h3 className='text-xl sm:text-2xl  font-semibold'>{title}</h3>
						<motion.div className=' overflow-hidden max-h-full'>
							<p className=' text-sm sm:text-lg flex-1 mt-2 leading-relaxed text-white/65 '>
								{description}
							</p>
						</motion.div>
						<ul className='flex group-even:justify-end flex-wrap mt-4 gap-2 sm:mt-auto'>
							{tags.map(tag => (
								<li className='capitalize text-xs sm:text-lg text-white rounded-full bg-red-900/30 px-2 py-1 sm:px-3 sm:py-2' key={tag}>{tag}</li>))}
						</ul>
					</div>
					{/*
					{imageUrls && <ImageCycler
						images={imageUrls}
						className='absolute object-cover top-8 -right-60  sm:-right-40 w-[28.25rem] shadow-2xl rounded-t-xl group-even:right-[initial]
							group-hover:-rotate-3
							group-even:sm:-left-40
							group-even:-left-60
							group-hover:-translate-x-5 
							group-hover:scale-105
							group-even:group-hover:rotate-3
							group-even:group-hover:translate-x-5 
							transition '

					/>}
					*/}
					<Image
						className='absolute object-cover top-8 right-0 max-w-[50%] w-full shadow-2xl rounded-t-xl group-even:right-[initial]
							group-hover:-rotate-3
							group-even:sm:left-0
							group-even:left-0
							group-hover:-translate-x-5 
							group-hover:scale-105
							group-even:group-hover:rotate-3
							group-even:group-hover:translate-x-5 
							transition '
						quality={95}
						alt='My Project'
						src={imageUrl}
						width={1000}
						height={1000}
					/>
				</article>
			</Link>
		</motion.div>

	);
}

export default Project;
