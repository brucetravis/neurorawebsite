import React from 'react'
import './PricingCards.css'

export default function PricingCards({ 
    category,
    name,
    price,
    features,
    Badge
}) {

  return (
    <div className='pricing-card'>
        {/* header */}
        <div className='card-header'>
            <h6 className='plan-type'>{name}</h6>

            <h5 className='plan-tag'>{Badge}</h5>
        </div>
        

        {/* price */}
        <div className='plan-price'>
            <h3>FROM <span>{price}</span></h3>
        </div>

        <a
            href='https://calendly.com/neurora4/30min'
            rel="noopener noreferer"
            className='plan-btn'
        >
            Get Started
        </a>

        {/* features */}
        <div className='plan-benefits'>
            <ul>
                {features.map((f, idx) => (
                    <li key={idx}>
                        {f}
                    </li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}
