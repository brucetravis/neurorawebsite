import React, { useState } from 'react'
import './Pricing.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { pricingPlans } from '../../../../data/pricing'
import PricingCards from '../../../cards/pricingcards/PricingCards'

export default function Pricing() {
    // inView state
    const [ ref, inView ] = useInView({
        triggerOnce: false, // trigger the effects when the section is in and out of view
        threshold: 0.1 // display the content when the section is 10% visible
    })

    // state to dynamically switch between currencies
    const [ currency, setCurrency ] = useState('USD')

    // title spring
    const titleSpring = useSpring({
        transform: inView ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: inView ? 1 : 0,
        config: { mass: 1, tension: 80, friction: 25 }
    })

    // conversion rates
    const conversionRates = {
        USD: 1,
        EUR: 0.92,
        KES: 150
    }

    // helper function to format the price
    const formatPrice = (priceStr) => {
        // if the price is empty, return an empty string
        if (!priceStr) return ""

        // make sure it is a string
        const str = priceStr.toString()

        const number = parseInt(str.replace(/[^0-9]/g, ''), 10)
        
        // safety check
        if (isNaN(number)) return '$0' // safety check
        
        // convert the currency
        const converted = Math.round(number * conversionRates[currency])
        
        // currency symbol
        let symbol = '$'
        if (currency === 'EUR') symbol = '€'
        if (currency === 'KES') symbol = 'KES'
        return `${symbol}${converted.toLocaleString()}` 
    }


  return (
    <main className='pricing-section' ref={ref}>
        <animated.h4
            style={{
            ...titleSpring
            }}
        >
            Pricing
        </animated.h4>


        <div className='currencies'>
            {['USD', 'EUR', 'KES'].map((c) => (
                <button
                    key={c}
                    className={`currency-btn ${c === currency ? "active" : ""}`}
                    onClick={() => setCurrency(c)}
                >
                    {c}
                </button>
            ))}
        </div>

        <section className='pricing-section-content'>
            {pricingPlans.map((category) => (
                <div
                    key={category.category} 
                    className='software-plans'
                >
                    <animated.h4
                        style={{
                        ...titleSpring
                        }}
                        className="pricing-category"
                    >
                        {category.category}
                    </animated.h4>

                    <div className='pricing-grid'>
                        {category.plans.map((plan) => (
                            <PricingCards 
                                key={plan.id}
                                category={category.category}
                                name={plan.name}
                                Badge={plan.badge}
                                price={formatPrice(plan.price)}
                                features={plan.features}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    </main>
  )
}
