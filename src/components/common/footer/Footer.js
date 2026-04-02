import React from 'react'
import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  
    // footer links
    const footerLinks = [
        { 
            id: 1,
            title: "Company",
            content: [
                "Home",
                "About",
                "Software & AI",
                "Robotics",
                "Contact Us"
            ]
        },

        { 
            id: 2,
            title: "Contact",
            content: [
                "Email Now",
                "X",
                "LinkedIn",
                "Facebook",
                "Instagram",
                "YouTube"
            ]
        },

        { 
            id: 3,
            title: "Legal",
            content: [
                "Software and Robotics Policy",
                "Privacy Policy",
                "Terms of Use",
                "Change Cookie Settings"
            ]
        }
    ]

    // function to navigate to another page
    const navigate = useNavigate()
  
    return (
    <footer>
        <div className='footer-content'>
            {footerLinks.map((section) => (
                <div 
                    key={section.id}
                    className='footer-sections'
                >
                    <h6>{section.title}</h6>

                    <div className='links-content'>
                        {section.content.map((item, idx) => (
                            <a
                                key={idx}
                                href={item}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            ))}

            <div className='footer-button'>
                <button
                    onClick={() => navigate('/about')}
                >
                    Learn More
                </button>
            </div>
        </div>

        <div className='footer-sign'>
            <div className='footer-logo'>
                <img 
                    src={require('../../../assets/images/logo.png')}
                    alt='Neurora Logo'
                />
            </div>

            <div>
                <h6>&copy;NEURORAINNOVATIONS 2026</h6>
            </div>
        </div>
    </footer>
  )
}
