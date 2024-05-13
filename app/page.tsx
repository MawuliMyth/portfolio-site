import Image from "next/image";
import {About, Contact, Experience, Footer, Intro, Projects, SectionDivider, Skills} from '@/components'
// import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex-center flex-col">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  );
}
