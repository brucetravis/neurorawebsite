import React from 'react'
import './Services.css'
import AIAdoption from '../../cards/aiadoption/AIAdoption'
import RoboticsCard from '../../cards/roboticscard/RoboticsCard'
import SoftwareCard from '../../cards/smartsoftwarecard/SoftwareCard'

export default function Services() {

  return (
    <section className='services-section'>
      <AIAdoption />

      <div className='software-services'>
        <RoboticsCard />
        <SoftwareCard />
      </div>
    </section>
  )
}
