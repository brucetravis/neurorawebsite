import React from 'react'
import './About.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

export default function About() {
    
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, 
        threshold: 0.1 // show section when It is 10% visible
    })

    // left spring
    const leftSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // right spring
    const rightSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // title spring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    return (
        <section className='about-section' ref={ref}>
            <animated.h4
                style={{
                    ...titleSpring
                }}
            >
                About NEURORA
            </animated.h4>

            <div className='about-content'>
                <animated.div
                    style={{
                        ...leftSpring
                    }}

                    className="left-column"
                >
                    <h3>
                        Building Automated Software and Robotics systems
                    </h3>
                </animated.div>

                <animated.div
                    style={{
                        ...rightSpring
                    }}

                    className="right-column"
                >
                    <p>
                        We build advanced software and robotics solutions that automate processes, enhance efficiency and 
                        bring artificial intelligence into everyday operations across multiple industries. From intelligent manufacturing
                        and logistics to healthcare and smart services, our systems are designed to optimize workflows, reduce errors, and 
                        empower businesses with data-driven insights
                    </p>

                    <p>
                        Our AI Adoption platform empowers businesses to adopt AI seamlessly into their workflows, unlocking smarter 
                        decision making and operational excellence.
                    </p>
                </animated.div>
            </div>
        </section>
    )
}
