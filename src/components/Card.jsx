import { useState } from 'react'


const Card = ({ name, type, size, img, price }) => {
    let [count, setCount] = useState(0);
    //initializing
    let addItems = () => {
        setCount(count => count + 1);
    };
    let removeItems = () => {
        setCount(count => count > 0 ? count - 1 : count = 0);       // he
    }

    return (
        <>
            <div class="center">
                <div class="card green">
                    <div class="additional">
                        <img src={img}
                            alt="" className='img' />
                    </div>
                    <div class="general">
                        <p className='head_text'>{name}</p>
                        <p className='clothing_type'>{type}</p>
                        <div class="size">
                            <p>
                                <spam>Size:
                                </spam> {size}
                            </p>
                        </div>
                        <div class="qty">
                            <spam >Qty: </spam>
                            <button class="button" onClick={removeItems}>-</button><big>{count}</big><button class="button" onClick={addItems}>+</button>
                        </div>
                        <div class="price" >

                            Price: Rs {count * price}

                        </div>
                    </div>
                </div>


            </div >
        </>
    );
};

export default Card;