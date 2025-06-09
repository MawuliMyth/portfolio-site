import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from '@/components'
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import Head from 'next/head'
import { info } from "@/lib/data";
const inter = Inter({ subsets: ["latin"] });



const title = `${info.firstname} ${info.lastname} | ${info.title}`// "Manuel Diamond | Full-Stack React Dev",

export const metadata: Metadata = {
  title,
  description: info.description,
  authors: [{ name: info.displayName, url: "https://github.com/manueldiamond/" }],
  openGraph: {
    type: "website",
    url: info.website,
    title,
    description: info.description,
    images: [{
      url: info.photo,
      width: 320,
      height: 320,
      alt: info.displayName,
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
      <Head>
        <meta name="google-site-verification" content="fa_FrVa23h0fxDQ02QTKsGhuSGKyh9wcbg6pnIgdlC8" />
      </Head>
      <body className={`${inter.className} pt-28 sm:pt-36 bg-black text-white height-[5000px]`}>
        <div className="pink-blur -z-10 bg-[red] absolute top-[-6rem] right-[11.25rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="blue-blur -z-10 bg-red-200/30 absolute top-[-1rem]  left-[-35.25rem] w-[50.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
