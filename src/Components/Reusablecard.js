import React from "react"

const Reusablecard = ({title="Card Title", text="Card Text", buttontext="Button Text", imgurl="Image URL"}) => (
    <div className="card" style={{width:"18rem"}}>
                <img
                  src={imgurl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                  <a href="#" class="btn btn-success">{buttontext}</a>
                </div>
              </div>
)

export default Reusablecard