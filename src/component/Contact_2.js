/* eslint-disable jsx-a11y/iframe-has-title */
export default function Section_11() {
  return (
    <section>
      <div className="container">
        <div className="row section_2 rounded-4 mt-5 pb-5">
          <div className='text text-light mt-3'><span className='under'>Contact</span> <span className='span'>with us</span></div>
          <div className="col-lg-8 col-md-12 rounded-4 mt-3 pb-5">
            <div className="moh p-5 rounded-5">
              <div class="jumbotron jumbotronSec11 p-3">
                <h1 class="display-4"><span className="span">Say Hello!</span></h1>
                <p class="lead">LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
                  This template is provided by TemplateMo and it is suitable for your
                  gaming shop ecommerce websites. <span className="span">Feel free to use this for any purpose.</span> Thank you.</p>
                <hr class="my-4" />
                <p class="lead">
                  <h6 className="address">Address</h6>
                  <p className="child">Sunny Isles Beach, FL 33160, United States</p>
                </p>
                <p class="lead">
                  <h6 className="address">Phone</h6>
                  <p className="child">+20 1555206997</p>
                </p>
                <p class="lead">
                  <h6 className="address">Email</h6>
                  <p className="child">alakhaly@gmail.com</p>
                </p>
              </div>
              <form action="post" className="">
                <div class="mb-3 d-flex justify-content-between pt-3">
                  <input type="text" className="rounded-5 p-3 me-2 inputSec11" placeholder="Your name..." />
                  <input type="text" className="rounded-5 p-3 me-2 inputSec11" placeholder="Your surname..." />
                </div>

                <div class="mb-3 d-flex justify-content-between pt-3">
                  <input type="text" className="rounded-5 p-3 me-2 inputSec11" placeholder="Your E-mail..." />
                  <input type="text" className="rounded-5 p-3 me-2 inputSec11" placeholder="subject..." />
                </div>

                <div class="mb-3 pt-3">
                  <textarea class="rounded-5 p-3 me-2 inputSec11" id="exampleFormControlTextarea1" rows="3" placeholder="your message..."></textarea>
                </div>
                <a href="#l" className="btn btn-sec2 mt-3 bi bi-send-fill">Send</a>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className=" map p-4 mb-5 rounded-4 d-flex flex-column mt-3">
              <iframe className="rounded-4" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9304.026748030034!2d31.33606708060492!3d30.058895702098614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1689864187372!5m2!1sar!2seg" height={880} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

