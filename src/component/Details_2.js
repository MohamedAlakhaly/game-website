import img1 from '../images/details-01.jpg';
import img2 from '../images/details-02.jpg';
import img3 from '../images/details-03.jpg';
export default function Section_8() {
  return (
    <section>
      <div className="container">
        <div className="text-center display-4 text-light mt-5">FORTNITE DETAILS</div>
        <div className="row section_2 rounded-4 mt-5 pb-5">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main section_8 p-4 mt-4 rounded-4">
              <div className="d-flex justify-content-between p-2">
                <div className="titleSec8">Fortnite</div>
                <div><i class="bi bi-star-fill me-2 starIcon"></i>4.8</div>
              </div>
              <div className="d-flex justify-content-between p-2">
                <div className="textSec8">Sandbox</div>
                <div><i class="bi bi-download me-2 downIcon"></i>2.3M</div>
              </div>
            </div>

          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="main2 section_8 p-4 mt-4 rounded-4">
              <div className="d-flex justify-content-between p-2">
                <i class="bi bi-star-fill starIcon"></i>
                <i class="bi bi-download me-2 downIcon"></i>
                <i class="bi bi-memory me-1 downIcon"></i>
                <i class="bi bi-controller me-3 downIcon"></i>
              </div>
              <div className="d-flex justify-content-between p-2">
                <div>4.8</div>
                <div>2.3M</div>
                <div>36GB</div>
                <div>Action</div>
              </div>
            </div>
            
          </div>
          <div className="row">
          <div className="col-lg-4 col-12">
            <img src={img1} className="card-img rounded-4 mt-5 ms-2" alt="" />
          </div>
          <div className="col-lg-4 col-12">
            <img src={img2} className="card-img rounded-4 mt-5 ms-2" alt="" />
          </div>
          <div className="col-lg-4 col-12">
            <img src={img3} className="card-img rounded-4 mt-5 ms-2" alt="" />
          </div>
          <div className="paragraphSec8 pt-5">Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.
             You can make a <a className="linkSec8" href="paypal.com">small contribution via PayPal</a> to info [at] templatemo.com and thank you for supporting.
              If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic 
              dipiscingei elit, sed doers eiusmod lisum hored tempor.</div>
        </div>
        <div className="container">
          <div className="row ps-5 pe-5 mt-3">
            <div className="col-lg-12">
            <div className="btn btnSec8 d-flex justify-content-center mt-4">Download Fortnite Now!</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

