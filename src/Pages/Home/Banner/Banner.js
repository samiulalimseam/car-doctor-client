import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'  
import img6 from '../../../assets/images/banner/6.jpg'  

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full  py-10">
  <div id="slide1" className="rounded carousel-item relative w-full">
    <div className="carousel-img rounded-lg">
    <img src={img1} alt="" className="w-full rounded-lg" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 m-2">
      <h1 className="text-6xl font-bold text-white">Affordable <br /> price for Car <br />Servicing</h1> <br />
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2 m-2">
    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w/5  top-3/4 m-2">
    <button className="btn btn-warning m-2">Discover More</button>
    <button className="btn btn-outline btn-warning m-2">Latest Project</button>

     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 m-2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  
</div>
        </div>
    );
};

export default Banner;