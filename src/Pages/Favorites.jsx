import React from 'react';
import { useSelector } from 'react-redux';
const Favorites = () => {
  const favorites = useSelector((state)=>state.favorites.favorites)
  console.log(favorites)
  return (
    <div className=" h-auto min-h-screen  w-full flex justify-center">
      <div className="w-11/12">
        <div className="lg:text-3xl text-xl font-medium tracking-tighter py-2">
          Favorites
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {favorites.map((items) => {
            return <div className="h-80 bg-purple-600 rounded-md">
              <img src={items.image} className='h-5/6 w-full object-cover rounded-t-md'  alt="" />
            </div>;
          })}

          {/* Updated width to w-1/5 for the fifth card */}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
