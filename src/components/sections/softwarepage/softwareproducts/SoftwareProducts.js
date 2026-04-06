import React from 'react'
import './SoftwareProducts.css'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function SoftwareProducts() {
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

  // default alert function for the links
  const defaultLink = (e) => {
    e.preventDefault() // prevent navigation
    alert('Project will be displayed soon')


  return (
    <section className='software-products-section' ref={ref}>

      <animated.h4
        style={{
          ...titleSpring
        }}
      >
        OUR PROJECTS
      </animated.h4>

      <div className='software-products-content'>
        {/* Top Row */}
        <div className="hex-row">
          <animated.a
            href="#!"
            onClick={defaultLink}

            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...leftSpring
            }}
          >
            <img 
              src="https://i.pinimg.com/1200x/44/0c/32/440c32f64d260bea470f0e5e736a44f7.jpg" 
              alt='Hex 1'
            />

            <div className='hex-content'>
              <h6>OUR AI PLATFORM</h6>
            </div>
          </animated.a>

          <animated.a

            href="#!"
            onClick={defaultLink}
            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...bottomSpring
            }}
          >
            <img 
              src="https://i.pinimg.com/736x/72/f2/63/72f263964ad7d25c06b4f5d52f771919.jpg" 
              alt='hex 2'
            />

            <div className='hex-content'>
              <h6>INTELIMART</h6>
            </div>
          </animated.a>

          <animated.a

            href="#!"
            onClick={defaultLink}

            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...rightSpring
            }}
          >
            <img 
              src="https://i.pinimg.com/736x/87/95/91/879591ed5b01787ad6540861600bb196.jpg" 
              alt='hex 3'
            />

            <div className='hex-content'>
              <h6>ATS</h6>
            </div>
          </animated.a>
        </div>

        {/* Bottom Row */}
        <div className="hex-row offset">
          <animated.a
            href="#!"
            onClick={defaultLink}

            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...leftSpring
            }}
          >

            <video autoPlay muted loop>
              <source 
                src={require('../../../../assets/videos/mobile_app.mp4')} 
                type='video/mp4'
              />
            </video>

            <div className='hex-content'>
              <h6>Mobile App</h6>
            </div>
          </animated.a>

          <animated.a

            href="#!"
            onClick={defaultLink}

            rel='noreferrer noopener'
            target='_blank'
            className="hexagon"
            style={{
              ...rightSpring
            }}
          >
            <img 
              src="https://i.pinimg.com/736x/be/fc/c8/befcc8a486bb0de8a53cc0668ad95c10.jpg" 
              alt='hex 5'
            />

            <div className='hex-content'>
              <h6>Analytics</h6>
            </div>
          </animated.a>
        </div>
      </div>

      <a
        href='https://calendly.com/neurora4/30min'
        rel='noopener noreferrer'
        className='contact-button'
      >
        Request a Quote
      </a>
    </section>
  )
}