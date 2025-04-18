import React from 'react'
import About from './About/About'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Projects from './Projects/Projects'




const Home = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4'>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
  

    </div>
  )
}

export default Home
