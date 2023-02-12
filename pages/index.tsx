import Head from "next/head";
import Image from "next/image";
// import { Inter } from '@next/font/google'
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Bottomnav from "@/components/Bottomnav";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] relative h-screen text-white snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e4ab86]">
      <Head>
        <title>Geepy - Full stack developer</title>
        <meta
          name="description"
          content="I am a full stack developer with experience in building robust and scalable web applications. Contact me for your next project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"></meta>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/logosm.ico" />
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
