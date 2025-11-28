import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {

    console.log(props);
    

  return (
    <>
        <div className="card">
            <div className="top">
                <img src={props.img} alt="logo" />
                <button>Save <Bookmark size={18} strokeWidth={1} /></button>
            </div>
            <div className="center">
                <h4>{props.company} <span>5 days ago</span></h4>
                <h2>{props.requirements}</h2>
                <div className="tags">
                    <span>Part-time</span>
                    <span>Senior level</span>
                </div>
            </div>
            <div className="bottom">
                <div className="content">
                    <h4>${props.amt}/hr</h4>
                    <span>{props.place}</span>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </>
  )
} 

export default Card
