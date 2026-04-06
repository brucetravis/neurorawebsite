import React from 'react'
import './RoboticsIndustries.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function RoboticsIndustries() {

    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger the effects when the section is in and out of view
        threshold: 0.1 // display the content when the section is 10% visible
    })

    // title spring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    const leftSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    const rightSpring = useSpring({
        transform: inView ? 'translateX(0%)' : 'translateX(100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    const bottomSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // default function
    const defaultFunction = (e) => {
        e.preventDefault()
        alert('Project will be displayed soon.')
    }

  return (
    <section className='robotics-industries-section' ref={ref}>

        <animated.h4
            style={{
            ...titleSpring
            }}
        >
            Industries We Serve
        </animated.h4>

        <div className='robotics-industries-content'>
            {/* Top Row */}
            <div className="hex-row">
                <animated.a
                    href='#!'
                    onClick={defaultFunction}
                    rel='noreferrer noopener'
                    target='_blank'
                    className="hexagon"
                    style={{
                    ...leftSpring
                    }}
                >
                    <img 
                        src="https://i.pinimg.com/1200x/39/74/c3/3974c3678ec83659b99c6a74bcb5c7ed.jpg" 
                        alt='Hex 1'
                    />

                    <div className='hex-content'>
                        <h6>HEALTHCARE</h6>
                    </div>
                </animated.a>

                <animated.a
                    href='#!'
                    onClick={defaultFunction}
                    target='_blank'
                    className="hexagon"
                    style={{
                    ...bottomSpring
                    }}
                >
                    <video autoPlay muted loop>
                        <source 
                            src={require('../../../assets/videos/logistics.mp4')}
                            type='video/mp4'
                        />
                    </video>

                    <div className='hex-content'>
                        <h6>LOGISTICS</h6>
                    </div>
                </animated.a>

                <animated.a
                    href='#!'
                    onClick={defaultFunction}
                    rel='noreferrer noopener'
                    target='_blank'
                    className="hexagon"
                    style={{
                    ...rightSpring
                    }}
                >
                    <video autoPlay muted loop>
                        <source 
                            src={require('../../../assets/videos/agriculture.mp4')}
                            type='video/mp4'
                        />
                    </video>

                    <div className='hex-content'>
                        <h6>Agriculture</h6>
                    </div>
                </animated.a>
            </div>

        {/* Bottom Row */}
        <div className="hex-row offset">
          <animated.a
            href='#!'
            onClick={defaultFunction}
            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...leftSpring
            }}
          >

            <video autoPlay muted loop>
              <source 
                src={require('../../../assets/videos/manufacturing.mp4')} 
                type='video/mp4'
              />
            </video>

                <div className='hex-content'>
                    <h6>Manufacturing</h6>
                </div>
            </animated.a>

            <animated.a
                href='#!'
                onClick={defaultFunction}
                rel='noreferrer noopener'
                target='_blank'
                className="hexagon"
                style={{
                ...rightSpring
                }}
            >
                <img 
                    src="https://i.pinimg.com/1200x/ad/70/ce/ad70ce147eb8ae07c3fc5c3d28364482.jpg" 
                    alt='hex 5'
                />

                <div className='hex-content'>
                    <h6>Construction</h6>
                </div>
            </animated.a>
            </div>
        </div>
    </section>
  )
}
