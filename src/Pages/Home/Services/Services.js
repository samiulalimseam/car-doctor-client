import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className='text-center max-w-[550px] mx-auto'>
                <p className="text-2xl font-bold text-error">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='m-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grap-6 my-auto mx-auto'>
                {
                    services.map(service=><ServiceCard service={service} key={service._id}>{service._id}</ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;