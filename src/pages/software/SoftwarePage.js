import React, { useEffect } from 'react'
import './SoftwarePage.css'
import SoftwareHero from '../../components/sections/softwarepage/softwarehero/SoftwareHero'
import { useLocation } from 'react-router-dom'
import SoftwareProducts from '../../components/sections/softwarepage/softwareproducts/SoftwareProducts'
import Pricing from '../../components/sections/softwarepage/pricing/Pricing'

export default function SoftwarePage() {

    // function to keep track of the browsers location
    const location = useLocation()

    // useEffect to scroll to the top of the page on page mount
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [
        location.pathname
    ]) // watch out for the path or the route
    
  return (
    <main className='software-page'>
        <SoftwareHero />
        <SoftwareProducts />
        <Pricing />
    </main>
  )
}
