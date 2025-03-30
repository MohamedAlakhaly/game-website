/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Card_sec2 from './Card_sec2';
import img1 from "./../images/popular-01.jpg";
import img2 from "./../images/popular-02.jpg";
import img3 from "./../images/popular-03.jpg";
import img4 from "./../images/popular-04.jpg";
import img5 from "./../images/popular-05.jpg";
import img6 from "./../images/popular-06.jpg";
import img7 from "./../images/popular-07.jpg";
import img8 from "./../images/popular-08.jpg";

function Section_2() {
  function mohamed(){
    return(
      setTimeout(()=>{
        alert('hello mohamed')
      },3000)
    )
  }
  return (
    <section>
      <div className="container section_2 rounded-4 mt-5 pb-5">
        <div className="row">
          <div className='text text-light'><span className='under'>Most Popular</span> <span className='span'>Right Now</span></div>
          <Card_sec2 img={img1}     card_title="Fortnite"   child1="4.8"   card_text="Sandbox"      child2="2.3M"/>
          <Card_sec2 img={img2}     card_title="PubG"       child1="4.8"   card_text="Battle S"     child2="2.3M"/>
          <Card_sec2 img={img3}     card_title="Dota2"      child1="4.8"   card_text="Steam-X"      child2="2.3M"/>
          <Card_sec2 img={img4}     card_title="CS-GO"      child1="4.8"   card_text="Legendary"    child2="2.3M"/>
          <Card_sec2 img={img5}     card_title="Mini Craft" child1="4.8"   card_text="Legendary"    child2="2.3M"/>
          <Card_sec2 img={img6}     card_title="Eagles Fly" child1="4.8"   card_text="Matrix Games" child2="2.3M"/>
          <Card_sec2 img={img7}     card_title="Warface"    child1="4.8"   card_text="Max 3D"       child2="2.3M"/>
          <Card_sec2 img={img8}     card_title="Warcraft"   child1="4.8"   card_text="Legend"       child2="2.3M"/>
          <div className="position-relative">
              <div className='btn position-absolute start-50 translate-middle btn-sec02 mt-5' onClick={mohamed}>Discover Popular</div>
          </div>
        </div>
      </div>
</section>

  )
}
export default Section_2