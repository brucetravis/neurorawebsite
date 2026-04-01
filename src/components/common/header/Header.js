import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, X } from 'lucide-react'

export default function Header() {

    // state to hide the header when the user scrolls down
    const [ isShowHeader, setShowHeader ] = useState(true) // initially hide the header

    // state to keep track of the headers position
    const [ lastScrollY, setLastScrollY ] = useState(0) // initially at the top

    // scrolled state to know if the user has scrolled
    const [ scrolled, setScrolled ] = useState(false) // initially set to false
    
    //  state to open and close the header
    const [ isOpen, setIsOpen ] = useState(false) // initially, the mobile header is closed
  
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

    // useEffect to hide the header when the user scrolls down
    useEffect(() => {

        // function to change hide the header when the user scrolls down
        const handleScroll = () => {
            // current scrolling position
            const currentScrollY = window.scrollY

            // if the current scrolling position is greater than the last scroll
            if (currentScrollY > lastScrollY) {
                // hide the header
                setShowHeader(false)
            } else {
                // show the header
                setShowHeader(true)
            }

            // add the background after scrolling 50px
            if (currentScrollY > 50) setScrolled(true)
                else setScrolled(false)

            // update the scroll the lastscroll position with the last scroll position
            setLastScrollY(currentScrollY)

        }

        // listen for the scroll event
        window.addEventListener('scroll', handleScroll)
        
        // remove the event listener on mount
        return () => window.removeEventListener('scroll', handleScroll)

    }, [lastScrollY]) // watch the scroll position
  
    return (
        <header
            className={`${isShowHeader ? "show" : "hide"} ${scrolled ? "scrolled" : ""}`}
        >
            <div className='header-logo'>
                <img 
                    src={require('../../../images/logo.png')}
                    alt='Neurora Icon'
                />
            </div>
            
            <MenuIcon
                size={30}
                stroke={
                    scrolled ? "#333" : "#fff" 
                }
                onClick={() => setIsOpen(true)} // open the mobile header
                className="open-mobile-icon"
            />

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

            {isOpen && (
                <nav className='mobile-nav'>
                    <X 
                        size={30}
                        stroke="#333"
                        onClick={() => setIsOpen(false)} // close the mobile header
                        className='close-mobile-icon'
                    />

                    <div className='mobile-header-links'>
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
                </nav>
            )}
        </header>
    )
}
