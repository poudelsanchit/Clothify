import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { SlLike, SlDislike } from 'react-icons/sl';
import ReviewReply from './ReviewReply';

function ReviewComment({data}) {

 console.log(data.stars) 
 
  // console.log(data.replies[0].active)
  // console.log(data?.replies);

  return (
    <div>
      <div className='flex mt-6 py-1'>
        {/* profile  */}
        <div className='mr-2 w-12 h-12 bg-pink-300 rounded-full'>
          <img
            className='mr-2 w-12 h-12 object-cover rounded-full'
            src={data.image}
            alt='User Avatar'
          />
        </div>
        {/* contain */}
        <div>
          <div className='font-bold text-base'>
            {data.name}
            <span className='font-normal text-sm text-gray-600'>{data.date}</span>
          </div>
          <div className='flex gap-1 py-1 pb-3'>
          <GoStarFill  color='#facc15' />
          <GoStarFill  color='#facc15' />
          <GoStarFill  color='#facc15' />
          <GoStarFill  color='#facc15' />
           
          </div>
          <div>
            <p className='pb-1 font-semibold text-sm'>{data.comments}</p>
          </div>
          <div className='flex items-center gap-2 text-xs mb-3'>
            <p>Reply</p>
            <SlLike />
            {data.likes} <SlDislike /> {data.dislike}
          </div>
               {data.replies[0].active ?  <ReviewReply data={data?.replies} /> : null}
          <hr className='w-[740px]' />
        </div>
      </div>
    </div>
  );
}

export default ReviewComment;
