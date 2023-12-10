import EachCard from './EachCard';

const Shipping = () => {
 


  return (
    <div className=" w-11/12 font-Poppins flex flex-col gap-5">
      <div className="text-2xl font-medium">Your Orders</div>
      <div className="flex flex-col gap-2">
        <EachCard/>
        <EachCard/>
        
      
        
        
        <div className="h-28 w-4/12 "></div>
      </div>
    </div>
  );
}

export default Shipping