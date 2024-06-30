
import React, { useContext } from 'react'
import Cart from '../components/Cart'
function Chackout() {

  return (
    <div className='flex mx-5 flex-wrap-reverse'>
      <div className='basis-[70%] flex justify-center  h-[100vh]'>
        <div className='border-2 w-[50%] min-w-[320px] h-fit  flex flex-col justify-center items-center'>
          <div className='w-[60%] min-w-[300px] my-3'>
            <p className='text-2xl font-semibold text-purple-700'>Enter cart Num.</p>
            <input className='border-black  rounded-lg border-2 outline-none w-[100%] h-10 text-black placeholder:text-black text-xl px-3' placeholder='0000-0000-0000' type="number" name="card-num" id="card-num" />
          </div>
          <div className='w-[60%] my-3'>
            <p className='text-2xl font-semibold text-purple-600'>Enter Expire Date:</p>
            <input type="date" name="card-date" id="card-date" />
          </div>
          <div className='w-[60%] min-w-[300px] my-3'>
            <p className='text-2xl font-semibold text-purple-600'>Enter cart CVV</p>
            <input className='border-black rounded-lg outline-none border-2 w-[100%] h-10 text-black placeholder:text-gray text-xl px-3' placeholder='000' min={100} max={999} type="number" name="card-cvv" id="card-cvv" />
          </div>
          <div>
          
            <button className='px-3 py-2 rounded-2xl border-2 border-black bg-purple-700 text-white'>Pay now!</button>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default Chackout