import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const defaultFunction = (e) => {
        e.preventDefault()
        alert('The legal document will be availabe for veiwing soon')
    }
  
    // footer links
    const footerLinks = [
        { 
            id: 1,
            title: "Company",
            content: [
                { id: 1, name: "Company", link: "/" },
                { id: 2, name: "AI Platform", link: "platform" },
                { id: 3, name: "Software & AI", link: "software" },
                { id: 4, name: "Robotics", link: "robotics" },
            ]
        },

        { 
            id: 2,
            title: "Contact",

            content: [
                { id: 1, name: "Email Now", link: "neurora4@gmail.com" },
                { id: 2, name: "X", link: "platform" },
                { id: 3, name: "LinkedIn", link: "software" },
                { id: 4, name: "Instagram", link: "robotics" }
            ]
        },

        { 
            id: 3,
            title: "Legal",

            content: [
                { id: 1, name: "Software and Robotics Policy", link: defaultFunction },
                { id: 2, name: "Privacy Policy", link: defaultFunction },
                { id: 3, name: "Terms of Use", link: defaultFunction },
                { id: 4, name: "Instagram", link: defaultFunction }
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
                        {section.content.map((item) => (
                            <a
                                key={item.id}
                                href={typeof item.link === 'string' ? item.link : '#!'} // string = normal link, function = dummy
                                onClick={typeof item.link === 'function' ? item.link : undefined} // only call function if link is a function
                                rel={typeof item.link === 'string' && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                target={typeof item.link === 'string' && item.link.startsWith('http') ? '_blank' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            ))}

            <div className='footer-button'>
                <button
                    onClick={() => navigate('/')}
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
