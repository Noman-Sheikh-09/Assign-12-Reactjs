import './threeStyle.css';

import React from 'react';

export function Three() {
  return <div>
<div className='container bg-part-3'>
<p className='p-1-part-3'>What Can We Help You Find?</p>
</div>
<div className='container card-1-part-3'>
  <div className='row'>
<div className='col-md-4 '><img src='./assets/icon 01.png' className='img-card-part-3' />
<p className='heading-card-1-part-3'>Buy a home</p>
<p className='sub-hading-card1-part-3'> With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
</div>
<div className='col-md-4'><img src='./assets/icon 02.png' className='img-card-part-3' />
<p className='heading-card-2-part-3'>Rent a home</p>
<p className='sub-heading-card2-part-3'>With 35+ filters and custom keyword search, Trulia can help you
 find a home.</p></div>
<div className='col-md-4'><img src='./assets/icon 03.png' className='img-card-part-3' />
<p className='heading-card-3-part-3'>See neighborhoods</p>
<p className='sub-heading-card3-part-3'>With more neighborhood insights than any other real estate
website.</p>

</div>
  </div>
</div>
  

  </div>;
}
