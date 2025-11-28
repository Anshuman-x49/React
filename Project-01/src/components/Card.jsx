import { Bookmark } from 'lucide-react'

const Card = (props) => {
   

  return (
    <>
        <div className="card">
            <div className="top">
                <img src={props.brandLogo} alt="Logo" />
                <button>Save <Bookmark size={18} strokeWidth={1} /></button>
            </div>
            <div className="center">
                <h4>{props.companyName} <span>5 days ago</span></h4>
                <h2>{props.role}</h2>
                <div className="tags">
                    <span>{props.tag}</span>
                </div>
            </div>
            <div className="bottom">
                <div className="content">
                    <h4>{props.pay}</h4>
                    <span>{props.location}</span>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </>
  )
} 

export default Card
