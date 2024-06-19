"use client"
import React from 'react';
import Image from 'next/image'
import { motion} from 'framer-motion'; 
import Link from 'next/link'

import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSection } from '@/context/ActiveSectionContext';



const Intro = () => {
	const ref = useSectionInView('Home',20);
	const {navigateTo}=useActiveSection()
	
    return (
       <section ref={ref} id="home" className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb- m-auto'>
		  <div className='flex-center flex-col'>
	        	<div className='relative'>
		        	<motion.div 
		        		initial={{scale:0,opacity:0}}
		        		animate={{scale:1,opacity:1}}
		        		transition={{type:'tween',duration:0.2}}
		        	>
				       	<Image
				       		className= 'rounded-full h-24 w-24 object-cover shadow-xl  border-white border-[0.35rem]'
				       		src={'https://i.ibb.co/KXj4gFL/vlcsnap-2023-12-24-20h47m55s399.png'}
				       		alt="Cursed Spirit Kenjaku in Suguru Geto's body"
				       		width={192}
				       		height={192}
				       		quality={95}
				       		priority={true}
				       	/>
		        	</motion.div>

		        	<motion.span 
		        		className='text-4xl absolute right-0 bottom-0'
		        		initial={{scale:0,opacity:0}}
		        		animate={{scale:1,opacity:1}}
		        		transition={{
		        			type:'spring', 
		        			stiffness:125, 
		        			delay:0.1,
		        			duration: .7
		        		}}
		        	>
		        		👋
		        	</motion.span>

		        </div>
		        <motion.h1 className='text-center m-5 text-2xl font-medium !leading-[1.5]'
		        	initial={{opacity:0,y:100}}
		        	animate={{opacity:1,y:0}} 

		        >
		        	<span className='font-bold'>Hello, I'm Manuel D. </span>
		        	I'm a 
		        	<span className='font-bold'> full-stack developer. </span><br/>
		        	with
		        	<span className='font-bold'> 5+ years </span> 
		        	of expeirence. I enjoy building <br/>
		        	<span className='italic'> sites & web-apps </span> with
		        	<span className='underline'> Next.js(React) </span>
		        </motion.h1>
       	  </div>
	        <motion.div 
	        	className=' flex-col flex justify-center px-4 text-lg font-medium gap-2 sm:flex-row'
	        	initial={{opacity:0,y:100}}
	        	animate={{opacity:1,y:0}}
	        	transition={{delay:.1,}}
	        >
	        	<Link href={"#contact"}
	        		onClick={()=>navigateTo('Contact')}
	        	 	className='bg-gray-900 text-white rounded-full py-3 px-7 flex-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition group'
	        	> 
	        	Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 group-hover:scale-110 transition'/>
	        	</Link>
	        	<a 
	        		className=' group bg-white rounded-full py-3 px-7 flex-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-95 transition border border-black/[.1]'
	        		href="/CV.pdf" download >
	        		Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 group-hover:scale-110 transition'/> 
	        	</a>
	        	<a 
	        		className='bg-white rounded-full p-4 text-gray-700 flex-center gap-2 text-[1.5rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-95 transition border border-black/[.1] hover:text-gray-950'
	        		href="https://www.linkedin.com/in/manuel-ashong-416a0a237/" target='_blank'>
	        		<BsLinkedin/> 
	        	</a>
	        	<a 
	        		className='bg-white rounded-full p-4 text-gray-700 flex-center gap-2 text-[1.5rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-95 transition border border-black/[.1] hover:text-gray-950'
	        		href="https://www.github.com/manueldiamond/" target='_blank'>
	        		  <BsGithub/> 
	        	</a>
				<a 
	        		className='bg-white rounded-full p-4 text-gray-700 flex-center gap-2 text-[1.5rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-95 transition border border-black/[.1] hover:text-gray-950'
	        		href="https://www.upwork.com/freelancers/~011e58865534aa91df" target='_blank'>
	        		  <Image className='flex flex-1' src='/upwork_icon.webp' width={24} height={24} alt='upwork icon'></Image> 
	        	</a>j
	        </motion.div>

       </section>
    );
};

export default Intro;