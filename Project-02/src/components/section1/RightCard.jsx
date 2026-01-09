import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden shrink-0 relative rounded-4xl'>
      <img className="w-full h-full object-cover" src={props.img} alt="image" />
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='h-12 w-12 bg-white rounded-full flex items-center justify-center font-semibold text-2xl'>{props.id+1}</h2>
        <RightCardContent tag={props.tag} intro={props.intro} />
      </div>
    </div>
  )
}

export default RightCard
