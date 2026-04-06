import React from 'react'
import './SoftwareCard.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function SoftwareCard() {

  // inView state
  const [ ref, inView ] = useInView({
    triggerOnce: false,
    threshold: 0.1 // show content when the page is 10% visible
  })


  // card spring
  const rightSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(50%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 25 }
  })

  return (
    <animated.div className='smart-software-card' ref={ref}
      style={{
        ...rightSpring
      }}
    >
      <img 
        src='https://i.pinimg.com/736x/08/fc/12/08fc1289f970e8f255fb6d348978d4ae.jpg'
        alt='Smart Software'
      />

      <h6>
        Smart Software Systems
      </h6>
    </animated.div>
  )
}
