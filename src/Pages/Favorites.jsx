import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Favorites = () => {
  const favorites = useSelector((state)=>state.favorites.favorites)
  return (
    <div className=" h-auto min-h-screen  w-full flex justify-center">
      <div className="w-11/12">
        <div className="lg:text-3xl text-xl font-medium tracking-tighter py-2 font-Poppins">
          Favorites
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {favorites.map((items) => {
            return (
              <Link to={`/shoes/${items.productId}`}>
              <div className="h-96  rounded-md flex flex-col gap-1 cursor-pointer">
                <img
                  src={items.image}
                  className="h-5/6 w-full object-cover rounded-t-md"
                  alt=""
                />
                <div className="font-Poppins text-xl font-medium flex w-full">
                  <div> {items.name}</div>
                
                </div>
                <div className="font-Poppins text-base text-secondary-text">
                  {items.price}
                </div>
              </div>
              </Link>
            );
          })}

          {/* Updated width to w-1/5 for the fifth card */}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
