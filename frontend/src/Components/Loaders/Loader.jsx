import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-max mt-20 flex justify-center   animate-pulse " >
    <div className="w-full flex gap-5 ">
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>

    
        </div>
        </div>
  )
}

export default Loader