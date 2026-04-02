import React, { useEffect } from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import About from '../../components/sections/about/About'
import Services from '../../components/sections/services/Services'
import { useLocation } from 'react-router-dom'

export default function Landing() {

  // location function to track the browser location
  const location = useLocation()

  // scroll to the top of the page on mount
  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [
    location.pathname
  ]) // empty dependency array

  return (
    <main className='landing-page'>
      <Hero />
      <About />
      <Services />
    </main>
  )
}
