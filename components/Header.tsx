"use client"
import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useActiveSection } from '@/context/ActiveSectionContext';
import { links } from '@/lib/data'


const Header = () => {
    const { activeSection, navigateTo } = useActiveSection()
    return (
        <header className='z-[999] relative'>
            <motion.div
                className='fixed p-2 top-0 left-1/2 w-full h-auto flex rounded-none border-white border-opacity-40 bg-black bg-opacity-80 shadow-lg shadow-black/[.03] backdrop-blur-[.5rem] sm:top-6 sm:rounded-full sm:w-[36rem] '
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ type: 'spring', delayChildren: 1 }}
            >
                <nav className='h-full w-full flex-center'>
                    <ul className=' flex-1 text-gray-500 flex-center font-medium max-w-[22rem] gap-3 sm:max-w-full flex-wrap sm:gap-0 sm:w-[initial] sm:flex-nowrap relative '>

                        <span style={{
                            width: `calc(100% / ${links.length})`,
                            transform: `
                                translate(
                                    calc( 100% * ${links.findIndex(link => link.name === activeSection)} ) 
                                    , 0 )`
                        }} className='transition absolute bg-red-400/20 h-full left-0 rounded-full invisible sm:visible' />
                        {
                            links.map((link, index) => (
                                <motion.li
                                    className='h-3/4 py-2 flex-1'
                                    key={link.hash}

                                    initial={{ y: -20, scale: 1, opacity: 0 }}
                                    animate={{ y: 0, scale: 1, opacity: 1 }}
                                    transition={{ type: 'spring', delay: Math.sqrt((index + 1) * .22) }}

                                >
                                    <Link
                                        className={`
                                        flex-1 flex-center text-center hover:text-white
                                        transition rounded-full sm:bg-transparent
                                         ${activeSection === link.name ? " text-red-500 px-4 bg-red-400/20 " : " "} `}
                                        href={link.hash}
                                        onClick={() => navigateTo(link.name)}
                                    >{link.name}</Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>

        </header>
    );
};

export default Header;
