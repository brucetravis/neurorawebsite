import React, { useEffect } from 'react'
import './Robotics.css'
import RoboticsHero from '../../components/sections/roboticshero/RoboticsHero'
import RoboticsIndustries from '../../components/sections/roboticsindustries/RoboticsIndustries'
import { useLocation } from 'react-router-dom'

export default function Robotics() {

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
    <main className='robotics-page'>
        <RoboticsHero />
        <RoboticsIndustries />
    </main>
  )
}
