/* eslint-disable react/jsx-pascal-case */
import imgProfile from '../images/profile.jpg';
import img1 from '../images/clip-01.jpg';
import img2 from '../images/clip-02.jpg';
import img3 from '../images/clip-03.jpg';
import img4 from '../images/clip-04.jpg';
import Card_profile from './Card_profile';
export default function Profile_1() {
  return (
    <section>
      <div className="container">
        <div className="section_2 rounded-4 p-5">
          <div className="row profile rounded-top-4 mt-5 pb-5">
            <div className='col-lg-4'>
              <img src={imgProfile} className="img-fluid rounded-5 p-3 mt-5" alt="..." />
            </div>

            <div className='col-lg-4 mt-lg-5'>
              <div class="jumbotron p-3 mt-5">
                <p className="jumpProfileBtn">Offline</p>
                <h3 class="">Alan </h3>
                <p class="lead jumpProfileText">You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <div className="btn bnt-jumpProfile">Start Live Stream</div>
              </div>
            </div>

            <div className='col-lg-4 mt-lg-5'>
              <ul class="section_2 mt-5 p-5  rounded-5">

                <div className="d-flex justify-content-between">
                  <li class="itemStr">Games Downloaded</li>
                  <li class="itemNum">3</li>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <li class="itemStr">Friends Online</li>
                  <li class="itemNum">16</li>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <li class="itemStr">Live Streams</li>
                  <li class="itemNum">None</li>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <li class="itemStr">Clips</li>
                  <li class="itemNum">29</li>
                </div>
              </ul>
            </div>
            <hr style={{
              color: '#6b7176',
            }} className='mt-5' />
          </div>

          <div className="row profile rounded-bottom-4 pb-5">
          <div className='text text-light mb-2'><span className='under'>Your Most Popular</span> <span className='span'>Clips</span></div>
            <Card_profile img={img1}    title='First Clip'     view='250' />
            <Card_profile img={img2}    title='Second Clip'    view='183' />
            <Card_profile img={img3}    title='Third Clip'     view='141' />
            <Card_profile img={img4}    title='Fourth Clip'    view='91' />
            
            <div className="position-relative pb-5">
              <a className='btn position-absolute start-50 translate-middle btn-sec02 mt-3' href='Browse'>Go To Profile</a>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}