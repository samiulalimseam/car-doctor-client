import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='mb-6'>
            <div className="hero h-[600px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2">
    <div className="relative">
    <img src={person} alt='' className=" w-4/5 rounded-lg shadow-2xl" />
    <img src={parts} alt='' className="absolute top-1/2 border-8 right-5 w-3/5 rounded-lg shadow-2xl" />
    </div>
    </div>
    <div className='w-1/2'>
        <p className="text-xl font-bold text-error">About Us</p>
      <h1 className="pb-6 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="pb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="pb-6">
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;