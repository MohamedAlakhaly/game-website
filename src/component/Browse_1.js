/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import img1 from '../images/game-01.jpg';
import img2 from '../images/game-02.jpg';
import img3 from '../images/game-03.jpg';
import img4 from '../images/pubg.jpg';

function Section_4() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 sec4 mt-5 pb-5 rounded-4 me-4">
            <div className='text text-light'><span className='under'>Featured</span> <span className='span'>Games</span></div>
            <a href="https://youtu.be/MavmeUzlbhw" target='_blank' ><img src={img4} class="img-fluid mt-4 rounded-4" alt="..." /></a>
          </div>
          <div className="col-lg-4 col-md-12 sec4 mt-5 pb-5 rounded-4 me-5">
            <div className='text text-light'><span className='under'>Top</span> <span className='span'>Download</span></div>
            <ul class="list-group list-group-flush mt-4 rounded-4">
              <div className='d-flex justify-content-between list-group-flush'>
                <li ><img src={img1} alt="img" className='p-3 img_sec3' />Dota 2</li>
                <a href="#ggu" className='linkSce4_1'><i class="btn-sec4 text-center me-3 bi bi-arrow-down"></i></a>
              </div>
              <hr />
              <div className='d-flex justify-content-between list-group-flush'>
                <li><img src={img2} alt="img" className='p-3 img_sec3' />Fortnite</li>
                <a href="#ggu" className='linkSce4_2'><i class="btn-sec4 text-center me-3 bi bi-arrow-down"></i></a>
              </div>
              <hr />
              <div className='d-flex justify-content-between list-group-flush'>
                <li><img src={img3} alt="img" className='p-3 img_sec3' />CS-GO</li>
                <a href="#ggu" className='linkSce4_3'><i class="btn-sec4 text-center me-3 bi bi-arrow-down"></i></a>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_4