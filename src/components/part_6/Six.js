import React from 'react';
import './sixStyle.css';

export function Six() {
  return <div>
    <div className='container-fluid blue-box-part-6'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'><p className='heading-part-6'>Talk to a Redfin Agent</p>
            <p className='sub-heading-part-6'>Start your search with an expert local agent—there’s no pressure or obligation.</p></div>
          <div className='col-md-2'></div>
          <div className='col-md-4'><p className='search-title-part-6'>Where are you searching for homes? </p>
            <input type="text" placeholder="City,Address,ZIP" className='search-box-part-6' /><button className='search-btn-part-6'>GO</button></div>
        </div>

      </div>

    </div>
  </div>;
}
