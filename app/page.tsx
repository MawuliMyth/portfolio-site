import { About, Contact, Experience, Footer, Intro, Projects, SectionDivider, Skills } from '@/components'

export default function Home() {
  return (
    <main className="flex-center flex-col">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
