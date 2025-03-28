/* eslint-disable react/jsx-pascal-case */
import img1 from "../images/avatar-01.jpg";
import img2 from "../images/avatar-02.jpg";
import img3 from "../images/avatar-03.jpg";
import img4 from "../images/avatar-04.jpg";
import Card_sec10 from "./Card_sec10";
export default function Section_10() {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 section_2 rounded-4 mt-5 pb-5">
            <div className='text text-light mt-3 mb-4'><span className='under'>Top</span> <span className='span'>Stream</span></div>
            <ul class="list-group list-group-flush mt-4 rounded-4">
              <hr />
              <Card_sec10   img={img1}   name=" LahutaM"       day="Saturday"    date="22/7/2023"   time="2 AM"/>
              <Card_sec10   img={img2}   name=" Kengann"       day="Sunday"      date="23/7/2023"   time="3 AM"/>
              <Card_sec10   img={img3}   name=" Areluwa"       day="Monday"      date="24/7/2023"   time="4 AM"/>
              <Card_sec10   img={img4}   name=" Omega"       day="Tuesday"     date="25/7/2023"   time="5 AM"/>
              <Card_sec10   img={img1}   name=" GangTe"      day="wednesday"   date="26/7/2023"   time="6 AM"/>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}