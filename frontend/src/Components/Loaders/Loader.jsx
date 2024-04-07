import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-auto flex justify-center mb-4 min-h-screen pt-10 animate-pulse " >
    <div className="w-11/12 flex gap-5 ">
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>
        <div className='w-full h-[480px] bg-slate-300 rounded-md'></div>

    
        </div>
        </div>
  )
}

export default Loader