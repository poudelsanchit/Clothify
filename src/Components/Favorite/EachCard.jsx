import { IconButton } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavorites} from '../../redux/Slices/favorites/favorites';


const EachCard = ({items,favorites}) => { 
    const favRef= useRef()
    const dispatch = useDispatch();
    const isProductInFavorites = favorites.some(item => item.productId === items.productId);
    const [isFavourite, setIsFavourite] = useState(isProductInFavorites);
  
  const handleRemoveFromFavorite=(e)=>{
    e.preventDefault();
     dispatch(removeFromFavorites({...items}))

  }
  return (
    <>
    <Link to={`/${items.type}/${items.productId}`}>
        <div className="h-96  rounded-md flex flex-col gap-1 cursor-pointer relative">
        <div className="  w-10 h-10 rounded-md absolute top-2 right-2 ">
        <IconButton
          className="w-full h-full"
          colorScheme={isFavourite ? "blue" : "blue"} // Use red color when item is already in favorites
          aria-label="Search database"
          icon={
            isFavourite ? (
              <FaHeart className="text-2xl text-red-200" />
            ) : (
              <CiHeart className="text-3xl  " />
            )
          }
          onClick={handleRemoveFromFavorite}
        />
      </div>

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
     
     
    </>
  );
}

export default EachCard