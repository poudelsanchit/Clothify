import React from 'react';
import { Link } from 'react-router-dom';

const SearchedItem = ({ item }) => {
  return (
    <Link to={`/${item.productType}/${item._id}`} className='cursor-pointer flex flex-row items-center gap-4 hover:bg-slate-300 p-4'>
      <img src={item.image[0]} alt="" className='h-10 w-10 object-cover rounded-full' />
      <div>{item.name}</div>
    </Link>
  );
};

export default SearchedItem;
