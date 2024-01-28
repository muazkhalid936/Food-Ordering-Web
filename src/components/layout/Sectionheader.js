import React from 'react'

const Sectionheader = ({subheader,mainheader}) => {
  return (
    <div className='my-5'>
    <div className="text-center">
    <div>
      <span className=" text-2xl text-gray-500 font-semibold">
      {subheader}
      </span>
    </div>

    <button className="text-2xl text-red-500 italic font-semibold px-6">
    {mainheader}
    </button>
  </div>
    </div>
  )
}

export default Sectionheader