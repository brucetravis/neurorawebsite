import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  
    //  an array of header links
    const headerLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Software&Robotics", link: "/software" },
        { id: 4, name: "AI Platform", link: "/platform" },
        { id: 5, name: "Robotics", link: "/robotics" },
        { id: 6, name: "Contact Us", link: "/contact" }
    ]

    // function to know the current page displayed
    const location = useLocation()
  
    return (
        <header>
            <div className='header-logo'>
                <img 
                    src={require('../../../images/logo.png')}
                    alt='Neurora Icon'
                />
            </div>

            <div className='header-links'>
                {headerLinks.map((l) => (
                    <Link
                        key={l.id}
                        to={l.link}
                        className={`${location.path === l.link ? "active" : ""}`}
                    >
                        {l.name}
                    </Link>
                ))}
            </div>
        </header>
    )
}
