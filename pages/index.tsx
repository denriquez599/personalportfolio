import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import SkillsPage from '../components/SkillsPage'
import WorkExperience from '../components/WorkExperience'
import { Skill, Experience } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'

type Props = {
  skills: Skill[];
  experiences: Experience[];
}

const Home = ({skills, experiences}: Props) => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
      <Head>
        <title>David Enriquez | Portfolio</title>
        <link rel="icon" href="/mainlogo.png"></link>
      </Head>      

      {/* Header */}
        <Header/>
      
      {/* Hero */}
      <section id="hero" className="snap-start h-screen bg-gradient-to-b from-[rgb(36,36,36)] to-white">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="bg-white h-screen snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center h-screen bg-gradient-to-b from-white to-[rgb(36,36,36)]">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start h-screen bg-ultimate">
        <SkillsPage skills={skills}/>
      </section>

      {/* Projects */}

      {/* Contact Me */}
      <footer id="contact" className="bg-[rgb(36,36,36)] snap-center">
        <Contact />
      </footer>

      

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();
  return {
    props: {
      skills,
      experiences
    },
    revalidate: 10,
  }
}