import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0'>

      <Head>
        <title>Manash &apos; s Portfolio</title>
      </Head>

       <Header />

       <section id="hero" className='snap-start'>
        <Hero />
       </section>

       <section id="about" className='snap-center'>
        <About /> 
       </section>

       {/* experience */}
       <section id="experience" className='snap-center'>
        <Experience />
       </section>

       {/* skills */}
       <section id="skills" className='snap-start'>
        <Skills />
       </section>

       {/* projects */}
       <section id="projects" className='snap-start'>
        <Projects />
       </section>

       {/* contact me */}
       <section>
        <ContactMe />
       </section>
    </div>
  )
}
