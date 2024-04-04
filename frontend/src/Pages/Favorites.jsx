import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import EachCard from '../Components/Favorite/EachCard';
import { useDispatch } from 'react-redux';
import {clearFavorites} from '../redux/Slices/favorites/favorites'
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state)=>state.favorites.favorites)
  const handleEmptyFavourite=()=>{
    dispatch(clearFavorites())


  }
  useEffect(()=>{
    window.scrollTo({behavior:'smooth',left: 0,top:0})

  },[])
  return (
    <div className=" h-auto min-h-screen  w-full flex justify-center">
      {favorites.length !== 0 ? (
        <div className="w-11/12">
          <div className="lg:text-3xl text-xl flex justify-between font-medium tracking-tighter py-2 font-Poppins">
            <div> Favorites</div>
            <div className='text-sm cursor-pointer tracking-wide text-red-500' onClick={handleEmptyFavourite}>Remove all  </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
            {favorites.map((items) => {
              return (
                <EachCard items={items} key={items.id} favorites={favorites} />
              );
            })}

            {/* Updated width to w-1/5 for the fifth card */}
          </div>
        </div>
      ) : (
        <div className="w-full h-screen  flex justify-center">
          <div className="w-11/12 pt-5 text-xl">No Products in Favorites</div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
