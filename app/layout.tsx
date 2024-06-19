 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Footer, Header} from '@/components'
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Manuel Diamond | Full-Stack React Dev",
  description: "Manuel Diamond Listowell is a new and rising Full-Stack React developer with 5 years of experience",

  authors: [{ name: "Manuel D.", url: "https://github.com/manueldiamond/" }],
  openGraph: {
    type: "website",
    url: "https://manuels-portfolio-site.vercel.app",
    title: "Manuel Diamond | Full-Stack React Dev",
    description: "Manuel Diamond Listowell is a new and rising Full-Stack React developer with 5 years of experience",

    images: [{
      url: "https://i.ibb.co/PxFb4S8/image-2024-06-19-020449669.png",
      
      alt: "ManuelZ"
    }]
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} pt-28 sm:pt-36 bg-gray-50 text-gray-950 height-[5000px]`}>
        <div className="pink-blur -z-10 bg-[#fbe2e3] absolute top-[-6rem] right-[11.25rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="blue-blur -z-10 bg-[#dbd7fb] absolute top-[-1rem]  left-[-35.25rem] w-[50.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer/>
        </ActiveSectionContextProvider>
        <Toaster position="bottom-left"/>
        <ThemeSwitch/>
      </body>
    </html>
  );
}
