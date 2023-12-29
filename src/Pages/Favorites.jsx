import React from 'react';

const Favorites = () => {
  return (
    <div className=" h-auto min-h-screen  w-full flex justify-center">
      <div className="w-11/12">
        <div className="lg:text-3xl text-xl font-medium tracking-tighter py-2">
          Favorites
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>
          <div className='h-64 bg-purple-600 rounded-md'></div>

          {/* Updated width to w-1/5 for the fifth card */}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
