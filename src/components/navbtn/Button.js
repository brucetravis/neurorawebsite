import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

export default function Button({ text, navLink }) {
    // function to navigate to other pages
    const navigate = useNavigate()
    
  return (
    <div>
        <button
            onClick={() => navigate(`/{navLink}`)}
        >
            {text}
        </button>
    </div>
  )
}
