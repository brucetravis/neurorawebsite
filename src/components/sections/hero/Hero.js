import React from 'react'
import './Hero.css'
import Button from '../../navbtn/Button'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  // inView state
  const [ ref, inView ] = useInView({
    triggerOnce: false,
    threshold: 0.1 // content visible when section is at least 10% visible
  })


  // content spring
  const contentSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translate(-100%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, friction: 25, tension: 80 },
    delay: 200
  })

  return (
    <section className='hero-section' ref={ref}>
      <div className='hero-image'>
        <img 
          // src='https://i.pinimg.com/1200x/70/48/b3/7048b30c361e2f0418300d69d6faaca3.jpg'
          src='https://i.pinimg.com/1200x/87/67/5d/87675d16c3568334883cda8c14807f1c.jpg'
          alt="hero pic"
        />
      </div>
      
      <animated.div 
        className='hero-content'
        style={{
          ...contentSpring
        }}
      >
        <h3>
          INTELLIGENT SOFTWARE AND ROBOTICS ENGINEERED FOR REAL-WORLD IMPACT
        </h3>

        <Button text="Learn More" />
      </animated.div>
    </section>
  )
}
