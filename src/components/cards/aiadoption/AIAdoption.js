import React from 'react'
import './AIAdoption.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function AIAdoption() {

  // inView state
  const [ ref, inView ] = useInView({
    triggerOnce: false,
    threshold: 0.1 // show content when the page is 10% visible
  })


  // card spring
  const leftSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 80, friction: 25 }
  })

  return (
    <animated.div 
      className='ai-adoption-card' 
      ref={ref}
      style={{
        ...leftSpring
      }}
    >
      <img 
        src='https://i.pinimg.com/736x/c6/df/8b/c6df8ba457db5828c91ac8fb813df296.jpg'
        alt='AI Adoption Platform'
      />

      <h6>
        Your Adoption journey starts here
      </h6>
    </animated.div>
  )
}
