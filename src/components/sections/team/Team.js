import React from 'react'
import './Team.css'
import TeamCard from '../../cards/teamcard/TeamCard'
import bruceImage from '../../../assets/images/bruce-travis-cropped.jpg'
import lumonaImage from '../../../assets/images/lumona.jpg'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function Team() {

    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // inView state will be triggered when the section is in and out of view
        threshold: 0.1 // content will be visible when the section is 10% visible
    })

    const team = [
        { 
            id: 1, 
            img: bruceImage, 
            name: 'Bruce Ambundo', 
            position: 'CEO/FOUNDER', 
            profile: 'https://www.linkedin.com/in/bruce-muchesi-345592240/' 

        },

        { 
            id: 2, 
            img: lumonaImage, 
            name: 'Lumona Mulengwa', 
            position: 'CO-FOUNDER', 
            profile: 'https://www.linkedin.com/in/lumona-mulengwa-117909165/' 
        }
    ]

    // up spring
    const upSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-20%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // downspring
    const downSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(20%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 },
        delay: 200
    })

    // title spring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // downSpring cards
    const springNums = [1, 3]

  return (
    <section className='team-section' ref={ref}>
        <animated.h4
            style={{
                ...titleSpring
            }}
        >
            MEET THE TEAM
        </animated.h4>

        <div
            className='team-section-content'
        >
            {team.map((m) => (
                <TeamCard 
                    key={m.id}
                    imageLink={m.img}
                    name={m.name}
                    position={m.position}
                    profile={m.profile}
                    cardSpring={springNums.includes(m.id) ? downSpring : upSpring}
                />
            ))}
        </div>
    </section>
  )
}
