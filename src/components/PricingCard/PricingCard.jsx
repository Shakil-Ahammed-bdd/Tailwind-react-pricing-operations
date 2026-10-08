import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {name, price,currency,duration,description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-200 rounded-3xl p-4'>
            {/* Card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <div className='flex gap-4'>
                     <h3 className='text-3xl'>{price}</h3>
                     <h3 className='text-3xl'>{currency}</h3>
                </div>
                <h2 className='text-5xl'>{duration}</h2>
            </div>
            {/* card body */}
            <div className='bg-blue-400 p-4 rounded-4xl mt-10 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full rounded-4xl mt-3">Subscribe</button>
        </div>
    );
};

export default PricingCard;