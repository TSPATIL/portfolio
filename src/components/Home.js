import React from 'react'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Skill from './Skill'
import Education from './Education'
import Work from './Work'
import Experience from './Experience'
import Contact from './Contact'

export default function Home({ link, setLink }) {
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop >= 4624 || document.documentElement.scrollTop >= 4624) {
      setLink(7)
    } 
    else if (document.body.scrollTop >= 3874.39990234375 || document.documentElement.scrollTop >= 3874.39990234375) {
      setLink(6)
    } 
    else if (document.body.scrollTop >= 2996 || document.documentElement.scrollTop >= 2996) {
      setLink(5)
    } 
    else if (document.body.scrollTop >= 2246.39990234375 || document.documentElement.scrollTop >= 2246.39990234375) {
      setLink(4)
    } 
    else if (document.body.scrollTop >= 1497.5999755859375 || document.documentElement.scrollTop >= 1497.5999755859375) {
      setLink(3)
    } 
    else if (document.body.scrollTop >= 748.7999877929688 || document.documentElement.scrollTop >= 748.7999877929688) {
      setLink(2)
    } 
    else {
      setLink(1)
    }
  }

  return (
    <div className='Home'>
      <Hero link={link} setLink={setLink} />
      <About />
      <Skill />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer setLink={setLink}/>
    </div>
  )
}
