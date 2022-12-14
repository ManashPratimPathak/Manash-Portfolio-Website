import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0'>

      <Head>
        <title>Manash's Portfolio</title>
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

       {/* projects */}

       {/* contact me */}
    </div>
  )
}
