import React from 'react'
import img1 from '../images/game-01.jpg'
import img2 from '../images/game-02.jpg'
import img3 from '../images/game-03.jpg'
function Section_3() {
  return (
    <section>
      <div className="container section_3 rounded-4 mt-5 pb-4">
        <div className="row">
          <div className='text text-light'><span className='under'>Your Gaming</span> <span className='span'>Library</span></div>
          <div className='col-lg-12 col-md-12 col-12'>
            <ul class="list-group list-group-flush mt-4 rounded-4">
              <div className='d-flex justify-content-between list-group-flush'>
              <li><img src={img1} alt="img" className='p-3 img_sec3' />Dota 2</li>
              <div className='btn btn-sec3 text-center me-3'>Download</div>
              </div>
              <hr/>

              <div className='d-flex justify-content-between list-group-flush'>
              <li><img src={img2} alt="img" className='p-3 img_sec3' />Fortnite</li>
              <div className='btn btn-sec3 text-center me-3'>Download</div>
              </div>
              <hr/>

              <div className='d-flex justify-content-between list-group-flush'>
              <li><img src={img3} alt="img" className='p-3 img_sec3' />CS-GO</li>
              <div className='btn btn-sec3 text-center me-3'>Download</div>
              </div>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section_3