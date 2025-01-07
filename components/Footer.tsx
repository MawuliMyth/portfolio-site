import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t pt-8 w-full text-center font-semibold text-gray-500 my-10 text-xs '>
            <small className='text-xs'>&copy; {(new Date()).getFullYear()} Ghana. All rights reserved</small>
            <p className='font-light text-xs mt-2 max-w-[320px] m-auto'>
                {/* <span>About this website</span> */}
                <span> Built with React & Next.js (App Router & Server Actions), TypeScript, TailwindCSS, Framar Motion, React mail & Resend.</span>
                <span> Hosted on Vercel</span>
            </p>
            <p className='centered text-center w-full opacity-70 text-xs font-extralight'>Disclaimer -  i did follow a
                {" "} <Link href='https://www.youtube.com/watch?v=sUKptmUVIBM&pp=ygUYYnl0ZSBncmFkIHJlYXQgcG9ydGZvbGlv'>
                    tutorial </Link>
                for this design</p>
        </footer>
    );
};

export default Footer;
