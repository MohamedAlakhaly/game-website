/* eslint-disable react/jsx-no-target-blank */

  import img1 from '../images/feature-left.jpg'
  import img2 from '../images/feature-right.jpg'
  export default function Section_7  ()  {
  return (
  <section>
    <div className="container">
       <div className="row section_2 rounded-4 mt-5 pb-5">
        <div className="col-lg-6 col-md-12 col-12">
        <a href="https://youtu.be/MavmeUzlbhw" target='_blank' ><img src={img1} className="img-fluid mt-5 img_left" alt="..." /></a> 
        </div>
        <div className="col-lg-6 col-md-12 col-12">
        <a href="https://youtu.be/MavmeUzlbhw" target='_blank' ><img src={img2} className="img-fluid mt-5 img_right" alt="..."/></a>
        </div>
      </div>
    </div>
  </section>
  )
}
