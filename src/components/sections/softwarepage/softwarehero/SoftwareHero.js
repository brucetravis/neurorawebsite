import React from 'react'
import './SoftwareHero.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function SoftwareHero() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger when the section is in View and out of view
        threshold: 0.1 // show content when the section is 10% visible
    })

    // topSpring
    const topSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })


  return (
    <section className='software-hero-section' ref={ref}>
        <img 
            // src='https://i.pinimg.com/736x/85/02/fa/8502facbe28857e2a2df425d0776db2b.jpg'
            src='https://i.pinimg.com/736x/fb/bf/7f/fbbf7f88ef24fa3c57aea432afc27eb4.jpg'
            alt='Software Hero'
        />

        <animated.div 
            className='software-hero-content'
            style={{
                ...topSpring
            }}
        >
            <h2>Leading in Software Innovation</h2>
            <h1>Building Systems that drive modern businesses</h1>
        </animated.div>
    </section>
  )
}
