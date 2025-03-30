export default function Card_profile (props)  {
  return (
    <div className="col-lg-3 col-md-6 col-12">
              <div className="card cardBgProfile mt-4 mb-4">
                <img src={props.img} className="card-img p-3 " alt="img.." />
                <div className="card-body">
                  <div className='par1'>
                    <h5 className="card-title ms-3">{props.title}</h5>
                    <span className='child1'><i class="bi bi-eye-fill me-2 downIcon"></i>{props.view}</span>
                  </div>
                </div>
              </div>
            </div>
  )
}

