import React, { useEffect } from 'react'
import './AIPlatform.css'
import { useLocation } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function AIPlatform() {

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
    <main className='platform-page' ref={ref}>
        <img 
            src='https://i.pinimg.com/1200x/62/c9/3e/62c93e366a8339b3f001a899543153c3.jpg'
            alt='Platform Hero'
        />

        <animated.div 
            className='platform-page-content'
            style={{
                ...contentSpring
            }}
        >
            <h3>
                We help Businesses integrate Artificial intelligence in their workflows
            </h3>

            <a
                href='/platform'
                target='_blank'
                className='button'
            >
                Learn More
            </a>
        </animated.div>
    </main>
  )
}
