import React from 'react'

const SearchedItem = ({item}) => {
    console.log(item)
  return (
    <div className='cursor-pointer  flex flex-row items-center gap-4  hover:bg-slate-300  p-4'>
    <img src={item.image} alt=""  className='h-10 w-10 object-cover rounded-full'/>
        <div>{item.name}</div>
        </div>
  )
}

export default SearchedItem