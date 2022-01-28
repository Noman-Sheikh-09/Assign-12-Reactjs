import './oneStyle.css';
export function One(){
   return(
<div>
    <div className="container part-1">
    <div className='row'>
<div className='col-md-6'>
<p className="p-1-part-1">
    Search for Homes in your Neighborhood
    </p>
    <p className='p-2-part-1'>
    Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.
    </p>
    <div className='Page-1-Search-box '>

          <form class="row g-3">
            <div class="col-md-3">
              <input type="text" className="form-control-plaintext Page-1-sb-Body" value="Address"></input>
            </div>
            <div class="col-md-3">
              <input type="text" className="form-control-plaintext Page-1-sb-Body" value="City"></input>
            </div>
            <div class="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Search</button>
            </div>
          </form>

        </div>

</div>
<div className='col-md-6'>
<img src='./assets/hero.png' alt='' className='img-1-part-1' />
</div>
    </div>
    </div>
</div>
   )
}