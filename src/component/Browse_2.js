import React from 'react'
import img1 from '../images/service-01.jpg';
import img2 from '../images/service-02.jpg';
import img3 from '../images/service-03.jpg';
function Section_5() {
  return (
    <section>
      <div className="container">
        <div className="row sec4 pt-3 mt-5 pb-5 rounded-4">
          <div className='text text-light text-center mt-5 mb-4'><span className='under'>How To Start Your</span> <span className='span'>Live Stream</span></div>
          <div className="col-lg-4">
            <div class="card cardBg mb-3 p-3 card_sec5 mt-5">
              <div class="card-body">
                <img src={img1} alt="img" className='rounded-5 mb-4' />
                <h5 class="card-title">Go To Your Profile</h5>
                <p class="card-text">Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card cardBg mb-3 p-3 card_sec5 mt-5">
              <div class="card-body">
                <img src={img2} alt="img" className='rounded-5 mb-4' />
                <h5 class="card-title">Live Stream Button</h5>
                <p class="card-text">If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card cardBg mb-3 p-3 card_sec5 mt-5 mb-5">
              <div class="card-body">
                <img src={img3} alt="img" className='rounded-5 mb-4' />
                <h5 class="card-title">You Are Live</h5>
                <p class="card-text">You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
              </div>
            </div>
          </div>
          <div className="position-relative pb-5">
              <div className='btn position-absolute start-50 translate-middle btn-sec02 mt-3'>Go To Profile</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_5