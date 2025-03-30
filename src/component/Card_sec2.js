import React from 'react'

function Card_sec2(props) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card cardBg mt-4 mb-4">
        <img src={props.img} className="card-img p-4 " alt="img.." />
        <div className="card-body">
          <div className='par1'>
            <h5 className="card-title ms-3">{props.card_title}</h5>
            <span className='child1'><i class="bi bi-star-fill me-2 starIcon"></i>{props.child1}</span>
          </div>
          <div className='par2'>
            <p className="card-text ms-3">{props.card_text}</p>
            <span className='child2'><i class="bi bi-download me-2 downIcon"></i>{props.child2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_sec2