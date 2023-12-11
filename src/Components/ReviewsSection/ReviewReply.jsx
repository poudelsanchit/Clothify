import React from 'react';
import { SlLike, SlDislike } from 'react-icons/sl';

function ReviewReply({ data }) {
console.log(data)
  return (
  <>
   <div>
      
    <div  className='flex mt-6 py-1 mb-4'>
        {/* mb-4 */}
      {/* profile  */}
      <div>
        <img
          className='mr-2 w-12 h-12 object-cover rounded-full'
          src={data?.image}
         
        />
      </div>
      {/* contain */}
      <div>
        <div className='font-bold text-base'>
          {data?.name} <span className='font-normal text-sm text-gray-600'>{data?.date}</span>
        </div>
        <div>
          <p className='pb-1 font-semibold text-sm'>{data?.comments}</p>
        </div>
        <div className='flex items-center gap-2 text-xs mb-3'>
          <p>Reply</p>
          <SlLike /> {data?.likes} <SlDislike /> {data?.dislikes}
        </div>
      </div>
    </div>
  
</div> 
  </>
  );
}

export default ReviewReply;
