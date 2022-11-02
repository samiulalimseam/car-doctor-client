import React from 'react';

const ServiceCard = ({service}) => {
    const {img, price, tittle} = service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-5">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-error">{tittle}</h2>
    <p className='font-semibold'>Price: $ {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-error">{`>>`}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;