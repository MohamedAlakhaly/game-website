export default function Card_sec10(props) {
  return (
    <>
      <div className='d-flex justify-content-between list-group-flush'>
        <li className="nameStream">
          <img src={props.img} alt="img" className='img_sec3 ms-2' />
          <i class="bi bi-caret-right-fill me-1 nameStream ps-2">
            {props.name}
          </i>
        </li>
        <div className="mt-2">{props.day}</div>
        <div className="mt-2">{props.date}</div>
        <div className="mt-2">{props.time}</div>
        <a href="#ggu" className='linkSce4 me-2 abs'><i class="btn btn-sec4">Follow</i></a>
      </div>
      <hr />
    </>
  )
}

