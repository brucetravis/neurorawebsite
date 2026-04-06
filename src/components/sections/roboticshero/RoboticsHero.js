import React from 'react'
import './RoboticsHero.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function RoboticsHero() {

    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger the effects when the section is in and out of view
        threshold: 0.1 // display the content when the section is 10% visible
    })

    const leftSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

  return (
    <div className='robotics-hero-section' ref={ref}>
        <video autoPlay muted loop>
            <source 
                src={require('../../../assets/videos/robotics-page.mp4')}
                type='video/mp4'
            />
        </video>

        <animated.div 
            className='robotics-hero-content'
            style={{
                ...leftSpring
            }}
        >
            <h3>
                We believe in combining human and artificial intelligence to enhance work flows
            </h3>
        </animated.div>
    </div>
  )
}
