import React from 'react'
import RightContent from './RightContent'
import Leftcontent from './Leftcontent'

const Page1Content = (props) => {
  return (
    <div className='px-10 py-8 flex items-center gap-10 h-[90vh]'>
      <Leftcontent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
