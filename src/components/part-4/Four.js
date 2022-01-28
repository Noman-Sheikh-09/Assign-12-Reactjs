import React from 'react';
import './fourStyle.css';

export function Four() {
  return <div>
      <div  className='container box-part-4'>
<div className='row'>
<div className='col-md-5'><p className='heading-part-4'>Our trending latest proparty</p>
<p className='sub-heading-part-4'>Our unique process gives you peace of mind from home rent to services</p></div>
<div className='col-md-3'></div>
<div className='col-md-2'><select className='btn-1-part-4'><option>property type</option></select></div>
<div className='col-md-2'><button className='btn-2-part-4'>See All property</button></div>
</div>
      </div>


      {/* Card Section  */}

    <div className='container'>
       <div className='row'>
<div className='col-md-6'><div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./assets/Image.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">$259,000</h5>
        <p className="card-text">Case Alda</p>
        <p className="card-text"><small className="text-muted">Co Rd Tribune Tribune</small></p>
        <button className='btn-card-1'>View Details</button>
      </div>
    </div>
  </div>
</div></div>
<div className='col-md-6'><div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./assets/iamge.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">$229,000</h5>
        <p className="card-text">Langes Beach House</p>
        <p className="card-text"><small className="text-muted">375 Highland Ave NE UNIT 1002</small></p>
        <button className='btn-card-1'>View Details</button>
      </div>
    </div>
  </div>
  </div>
  </div>
       </div>
       <div className='row'>
<div className='col-md-6'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./assets/Three.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">$289,000</h5>
        <p className="card-text">Supper Delax Home</p>
        <p className="card-text"><small className="text-muted">1398 Lynford Dr SW, Atlanta</small></p>
        <button className='btn-card-1'>View Details</button>
      </div>
    </div>
  </div>
  </div>
</div>
<div className='col-md-6'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./assets/Four.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">$329,000</h5>
        <p className="card-text">Clinton Villa</p>
        <p className="card-text"><small className="text-muted">675 Albert St NW, Atlanta</small></p>
        <button className='btn-card-1'>View Details</button>
      </div>
    </div>
  </div>
  </div>
</div>
       </div>
    </div>
  </div>;
}
