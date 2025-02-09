import React from 'react'
import Ladi from '../components/Ladi'


const page = ({params:{product}}) => {
  return (
    <div className="w-[420px] m-auto  relative scroll-smooth">
      <Ladi/>
    </div>
  )
}

export default page