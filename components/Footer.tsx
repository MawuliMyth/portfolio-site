import React from 'react';

const Footer = () => {
    return (
        <footer  className='border-t pt-8 w-full text-center font-semibold text-gray-500 my-10 text-xs '>
           <small className='text-xs'>&copy; 2024 Ghana. All rights reserved</small>
           <p className='font-light text-xs mt-2 max-w-[320px] m-auto'>
            {/* <span>About this website</span> */}
            <span> Built with React & Next.js (App Router & Server Actions), TypeScript, TailwindCSS, Framar Motion, React mail & Resend.</span>
            <span> Hosted on Vercel</span>
           </p>
        </footer>
    );
};

export default Footer;