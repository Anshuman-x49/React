import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <p className='text-lg leading-normal text-white mb-10'>{props.intro}</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white rounded-full px-8 py-2'>{props.tag}</button>
            <button className='bg-blue-600 text-white rounded-full px-3 py-2'><i class="ri-arrow-right-line"></i></button>
        </div>
    </div>
  )
}

export default RightCardContent
