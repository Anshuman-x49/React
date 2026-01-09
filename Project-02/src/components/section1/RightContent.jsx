import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-3/4 p-7 overflow-x-auto flex flex-nowrap gap-6'>
      {props.users.map((elem, idx) => (
        <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
      ))}
    </div>
  )
}

export default RightContent
