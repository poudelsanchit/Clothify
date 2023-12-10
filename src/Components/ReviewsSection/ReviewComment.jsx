import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { SlLike, SlDislike } from 'react-icons/sl';
import ReviewReply from './ReviewReply';
function ReviewComment({reply}) {
  console.log();

  return (
    <div>
      <div className='flex mt-6 py-1'>
        {/* profile  */}
        <div>
          <img
            className='mr-2 w-12 h-12 object-cover rounded-full'
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='User Avatar'
          />
        </div>
        {/* contain */}
        <div>
          <div className='font-bold text-base'>
            {data.user.name}
            <span className='font-normal text-sm text-gray-600'>{data.date}</span>
          </div>
          <div className='flex gap-1 py-1 pb-3'>
            {Array.from({ length: data.rating }, (_, index) => (
              <GoStarFill key={index} color='#facc15' />
            ))}
          </div>
          <div>
            <p className='pb-1 font-semibold text-sm'>{data.comment}</p>
          </div>
          <div className='flex items-center gap-2 text-xs mb-3'>
            <p>Reply</p>
            <SlLike />
            {data.likes} <SlDislike /> {data.dislikes}
          </div>
              {reply?  <ReviewReply data={data} /> : null  }
          
          <hr className='w-[740px]' />
        </div>
      </div>
    </div>
  );
}

export default ReviewComment;
