import React from 'react'

export default function Card_sec6(props) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card cardSec6 p-3 mt-4">
        <img src={props.img} className="card-img p-2" alt="..." />
        <div className="card-body">
          <img src={props.avatar} alt="img" className='d-inline rounded-5 ps-1'/>
          <h5 className="card-title d-inline titleCardSec6 ms-3"><i class="bi bi-caret-right-fill me-1"></i>{props.title}</h5>
          <p className="card-text textCardSec6 ms-3 mt-2">{props.text }</p>
        </div>
      </div>
    </div>
  )
}