/* eslint-disable react/jsx-pascal-case */
import Card_sec6 from "./Card_sec6";
import img1 from '../images/stream-01.jpg';
import img2 from '../images/stream-02.jpg';
import img3 from '../images/stream-03.jpg';
import img4 from '../images/stream-04.jpg';
import avatar1 from '../images/avatar-01.jpg'
import avatar2 from '../images/avatar-02.jpg'
import avatar3 from '../images/avatar-03.jpg'
import avatar4 from '../images/avatar-04.jpg'
export default function Section_6() {
  return (
    <section>
      <div className="container">
        <div className="row sec4 pt-3 mt-5 pb-5 rounded-4">
        <div className='text text-light mt-3 mb-4'><span className='under'>Most Popular</span> <span className='span'>Live Stream</span></div>
          <Card_sec6 img={img1}   avatar={avatar1}   title="KenganC"  text="Just Talking With Fans"         />
          <Card_sec6 img={img2}   avatar={avatar2}   title="LunaMa"   text="CS-GO 36 Hours Live Stream"     />
          <Card_sec6 img={img3}   avatar={avatar3}   title="Areluwa"  text="Maybe Nathej Allnight Chillin'" />
          <Card_sec6 img={img4}   avatar={avatar4}   title="GangTm"   text="Live Streaming Till Morning"    />
        </div>
      </div>
    </section>
  )
}

