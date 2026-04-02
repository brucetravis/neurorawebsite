import React from 'react'
import './RoboticsCard.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function RoboticsCard() {

  // inView state
  const [ ref, inView ] = useInView({
    triggerOnce: false,
    threshold: 0.1 // show content when the page is 10% visible
  })


  // card spring
  const topSpring = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(50%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 25 }
  })

  return (
    <animated.div className='robotics-services' ref={ref}
      style={{
        ...topSpring
      }}
    >
      <video autoPlay muted loop>
        <source 
          src={require('../../../videos/robot.mp4')} type='video/mp4' 
        />
      </video>

      <h6>
        Robotics Systems Build for Precidion and Automation
      </h6>
    </animated.div>
  )
}
