import React from 'react'
import './TeamCard.css'
import { animated } from 'react-spring'

export default function TeamCard({ imageLink, name, position, profile, cardSpring }) {
  
    return (
        <animated.div 
            className='team-card'
            style={{
                ...cardSpring
            }}
        >
            <img 
                src={imageLink}
                alt='team member'
            />

            <div className='card-content'>
                <div>
                    <h6>{name}</h6>
                    <p>{position}</p>
                </div>

                <div className='profile-icon'>
                    <a
                        href={profile}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <img 
                            src='https://i.pinimg.com/1200x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg'
                            alt='linkedIn Icon'
                        />
                    </a>
                </div>
            </div>
        </animated.div>
    )
}
