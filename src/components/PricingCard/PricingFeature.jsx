import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3 mt-2'> <CircleCheckBig></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeature;