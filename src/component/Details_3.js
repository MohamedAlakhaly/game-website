import img1 from '../images/game-01.jpg'
import img2 from '../images/game-02.jpg'
import img3 from '../images/game-03.jpg'
import img4 from '../images/featured-02.jpg'

export default function Section_9() {
  return (
    <section>
      <div className="container">
        <div className="row section_2 rounded-4 mt-5 pb-5">
          <div className='text text-light mt-3 mb-4'><span className='under'>Most Popular</span> <span className='span'>Live Stream</span></div>
          <div className="col-lg-6 col-md-12 col-12">

            <ul class="list-group list-group-flush mt-4 rounded-4">
              <div className='d-flex justify-content-between list-group-flush'>
                <li><img src={img1} alt="img" className='p-3 img_sec3' />Dota 2</li>
                <div className='mt-5 me-5'><i class="bi bi-star-fill me-2 starIcon"></i>4.8</div>
                <div className='mt-5 me-5'><i class="bi bi-download me-2 downIcon"></i>2.3M</div>
              </div>
              <hr />

              <div className='d-flex justify-content-between list-group-flush'>
                <li><img src={img2} alt="img" className='p-3 img_sec3' />Dota 2</li>
                <div className='mt-5 me-5'><i class="bi bi-star-fill me-2 starIcon"></i>4.8</div>
                <div className='mt-5 me-5'><i class="bi bi-download me-2 downIcon"></i>2.3M</div>
              </div>
              <hr />

              <div className='d-flex justify-content-between list-group-flush'>
                <li><img src={img3} alt="img" className='p-3 img_sec3' />Dota 2</li>
                <div className='mt-5 me-5'><i class="bi bi-star-fill me-2 starIcon"></i>4.8</div>
                <div className='mt-5 me-5'><i class="bi bi-download me-2 downIcon"></i>2.3M</div>
              </div>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="card mb-3 mt-4 rounded-4 cardSec9 p-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img4} className="img-fluid rounded-5" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><span className='span'>past</span> player</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae, asperiores tempore velit quaerat facilis ea a sed eius, eaque dolorem impedit alias temporibus placeat dolores unde quasi! Soluta, eum!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

