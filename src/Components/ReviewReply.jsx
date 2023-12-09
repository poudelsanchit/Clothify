import React from 'react';
import { SlLike, SlDislike } from 'react-icons/sl';

function ReviewReply({ data }) {
  const replies = data.replySection?.replies || [];

  return (
    <div>
      {replies.map((reply, index) => (
        <div key={index} className='flex mt-6 py-1 mb-4'>
            {/* mb-4 */}
          {/* profile  */}
          <div>
            <img
              className='mr-2 w-12 h-12 object-cover rounded-full'
              src={reply.user.avatar}
              alt={`Reply ${index + 1} Avatar`}
            />
          </div>
          {/* contain */}
          <div>
            <div className='font-bold text-base'>
              {reply.user.name} <span className='font-normal text-sm text-gray-600'>{reply.date}</span>
            </div>
            <div>
              <p className='pb-1 font-semibold text-sm'>{reply.comment}</p>
            </div>
            <div className='flex items-center gap-2 text-xs mb-3'>
              <p>Reply</p>
              <SlLike /> {reply.likes} <SlDislike /> {reply.dislikes}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewReply;
