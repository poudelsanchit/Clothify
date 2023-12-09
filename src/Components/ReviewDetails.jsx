import React from 'react';
import { GoStarFill } from 'react-icons/go';
import ProgressBar from "@ramonak/react-progress-bar";

function ReviewDetails() {
  
  const progressValues = [74, 50, 90, 30, 65];

  return (
    <div className='grid gap-10 justify-center items-center'>
      <div className="flex text-3xl gap-3">
      {progressValues.map((value, index) => (
          <React.Fragment key={index}>
            <GoStarFill color='#facc15' />
          </React.Fragment>
        ))}
        <p className='ml-16 font-bold'>4.8</p>
      </div>
      <hr />


      <div className='grid gap-4 rounded-md  font-semibold'>
        {progressValues.map((value, index, ) => ( <>
        <div className=" flex  items-center justify-between">
        <div>{progressValues.length - index}</div>
          <ProgressBar
            key={index}          
            labelSize={0}
            completed={value}
            hideLabel={true}
            bgColor="#facc15"
            height="12px"
            width='240px'
          />
          <div>{index + 20 }</div>
        </div>
          </>
        ))}
      </div>
      <div className=' bg-[#7ea1906c] w-[22rem]  rounded-md p-6 h-36 font-extrabold flex justify-center items-center  text-4xl'>Popular brands with discount over 25%</div>
    </div>
  );
}

export default ReviewDetails;
